import { useState } from "react"
import CreateDirectQuestion from "../components/QuizCreation/CreateDirectQuestion"
import CreateSingleQuestion from "../components/QuizCreation/CreateSingleQuestion"
import CreateMultipleQuesiton from "../components/QuizCreation/CreateMultipleQuesiton"

export default function CreateQuizPage() {

    const [quiz, setQuiz] = useState([
        { id: Date.now(), type: 'direct', question: '', correctAnswer: '', options: [''] },
    ])

    function addQuestion() {
        setQuiz(
            [
                ...quiz,
                { id: Date.now(), type: 'direct', question: '', correctAnswer: '', options: [''] },
            ]
        )
    }

    function editQuestion(id, value, field) {
        setQuiz(
            quiz.map(item => {
                if (item.id === id) {
                    item = {
                        ...item,
                        [field]: value
                    }
                }

                return item
            })
        )
    }

    return (
        <div>

            <h2 className="text-center font-bold text-2xl text-amber-400">Создать новый квиз</h2>

            <div className="mt-4">



                {
                    quiz.map(question => (
                        <div>
                            <select onChange={(e) => editQuestion(question.id, e.target.value, 'type')} className="bg-gray-300 px-2 py-1 rounded-xl mb-5">
                                <option value="direct">Вопрос с прямым ответом</option>
                                <option value="signle">Выбор из одного варианта</option>
                                <option value="multiple">Выбор из множества вариантов</option>
                            </select>
                            {
                                question.type === 'direct' && <CreateDirectQuestion question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'signle' && <CreateSingleQuestion question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'multiple' && <CreateMultipleQuesiton question={question} editQuestion={editQuestion} />
                            }
                        </div>

                    ))
                }


                <div className="flex gap-x-5 mt-5">
                    <button onClick={() => addQuestion()} className="px-2 py-1 rounded-md bg-gray-500 text-white">Добавить вопрос</button>
                    <button className="px-2 py-1 rounded-md bg-green-500 text-white">Сохранить квиз</button>
                </div>
            </div>


        </div>
    )
}
