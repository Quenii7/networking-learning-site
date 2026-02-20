import random

MODULES = {
    "osi": {
        "title": "OSI Model",
        "quiz": [
            {
                "question": "Which layer handles routing?",
                "options": ["Application", "Network", "Session", "Physical"],
                "answer": "Network",
            },
            {
                "question": "How many OSI layers exist?",
                "options": ["5", "6", "7", "8"],
                "answer": "7",
            },
        ],
    },
    "ipv4": {
        "title": "IPv4 Addressing",
        "quiz": [
            {
                "question": "IPv4 address length is:",
                "options": ["16", "32", "64", "128"],
                "answer": "32",
            },
            {
                "question": "Which is private?",
                "options": ["192.168.1.1", "8.8.8.8", "1.1.1.1", "203.0.113.1"],
                "answer": "192.168.1.1",
            },
        ],
    },
}


def grade_quiz(module_id: str, answers: list[str]) -> tuple[int, int]:
    quiz = MODULES[module_id]["quiz"]
    score = 0
    for idx, question in enumerate(quiz):
        if idx < len(answers) and answers[idx] == question["answer"]:
            score += 1
    return score, len(quiz)


def generate_subnet_challenge() -> dict[str, int | str]:
    prefix = random.choice([24, 25, 26, 27, 28, 29, 30])
    block_size = 2 ** (32 - prefix)
    usable_hosts = max(block_size - 2, 0)
    return {
        "network": f"10.0.{random.randint(0, 10)}.0/{prefix}",
        "prefix": prefix,
        "usable_hosts": usable_hosts,
    }
