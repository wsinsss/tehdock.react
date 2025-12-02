export default function CreateDirectQuestion({ question, editQuestion }) {

    return (
        <div>
            <label>
                <p>Текст вопроса</p>
                <input value={question.question} type="text" onInput={(e) => editQuestion(question.id, e.target.value, 'question')} placeholder="Вопрос" />
            </label>
            <label>
                <p>Правильный ответ</p>
                <input value={question.correctAnswer} type="text" onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')} placeholder="Ответ" />
            </label>
        </div>
    )
}
