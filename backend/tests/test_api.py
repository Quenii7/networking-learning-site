from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json() == {'status': 'ok'}


def test_modules() -> None:
    response = client.get('/api/modules')
    assert response.status_code == 200
    data = response.json()
    assert 'modules' in data
    assert len(data['modules']) >= 2


def test_grade_quiz() -> None:
    response = client.post('/api/quiz/grade', json={'module_id': 'osi', 'answers': ['Network', '7']})
    assert response.status_code == 200
    assert response.json() == {'score': 2, 'total': 2}
