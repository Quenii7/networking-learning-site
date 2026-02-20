from pydantic import BaseModel


class QuizAnswerRequest(BaseModel):
    module_id: str
    answers: list[str]


class QuizResult(BaseModel):
    score: int
    total: int


class SubnetChallenge(BaseModel):
    network: str
    prefix: int
    usable_hosts: int
