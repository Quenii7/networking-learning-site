from fastapi import APIRouter, HTTPException

from app.models.schemas import QuizAnswerRequest, QuizResult, SubnetChallenge
from app.services.content import MODULES, generate_subnet_challenge, grade_quiz

router = APIRouter(prefix="/api", tags=["learning"])


@router.get("/modules")
def get_modules() -> dict[str, list[dict]]:
    modules = []
    for module_id, module_data in MODULES.items():
        modules.append(
            {
                "id": module_id,
                "title": module_data["title"],
                "quiz_count": len(module_data["quiz"]),
            }
        )
    return {"modules": modules}


@router.post("/quiz/grade", response_model=QuizResult)
def grade_quiz_answers(payload: QuizAnswerRequest) -> QuizResult:
    if payload.module_id not in MODULES:
        raise HTTPException(status_code=404, detail="Module not found")

    score, total = grade_quiz(payload.module_id, payload.answers)
    return QuizResult(score=score, total=total)


@router.get("/subnet/challenge", response_model=SubnetChallenge)
def subnet_challenge() -> SubnetChallenge:
    return SubnetChallenge(**generate_subnet_challenge())
