import React, {useEffect, useState, useRef} from "react"
import "./CommentsSection.css"

const CommentsSection = () => {
    const API_GET_URL = "https://hackaton-zeta.ru/sasha/birthday/social/network/get"
    const API_POST_URL = "https://hackaton-zeta.ru/sasha/birthday/social/network"

    const [comments, setComments] = useState([])

    const commentsContainerRef = useRef(null)
    const formRef = useRef(null)
    const isLoadAllowed = useRef(true)

    function load(offset=0, limit=10) {
        if (!isLoadAllowed.current) return

        fetch(API_GET_URL)
            .then(r => {
                if (!r.ok) throw new Error(r.status.toString())
                return r.json()
            })
            .then(c => {
                if (c.length < limit) { isLoadAllowed.current = false }
                else {
                    isLoadAllowed.current = false
                    setTimeout(() => {
                        isLoadAllowed.current = true
                    }, 250)
                }
                setComments(c)
            })
            .catch(e => console.error(e))
    }

    function add(e) {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const query = "?name=" + formData.current.name.value + "&message" + formData.current.message.value

        fetch(API_POST_URL + query, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
            .then(r => {
            if (!r.ok) throw new Error(r.status.toString())
            setComments(c => [...c, Object.fromEntries(formData)])
        })
            .catch(e => console.error(e))

        formRef.current.name.value = ""
        formRef.current.message.value = ""
    }

    useEffect(() => {
        load()
        // function handleScroll() {
        //     const { scrollTop, scrollHeight, clientHeight } = commentsContainerRef.current
        //     const remaining = scrollHeight - scrollTop - clientHeight
        //     if (remaining < 100) { load() }
        // }
        //
        // commentsContainerRef.current?.addEventListener("scroll", handleScroll)
        // return () => commentsContainerRef.current.removeEventListener("scroll", handleScroll)
    }, [])

    const commentsElements = comments.map((c, i) => {
        return (
            <div key={i} className={i % 2 ? "left_blok" : "right_blok"}>
                <div className="com">
                    <h2>{c.name}</h2>
                    <h4>{c.message}</h4>
                </div>
            </div>
        )
    })

    const noCommentsElements = <div>
            <div className="left_blok">
                <h2 className='com'>Пока пусто...</h2>
            </div>
            <div className="right_blok">
                <h2 className='com'>Напишите что-нибудь...</h2>
            </div>
        </div>

    return (
        <section className='comments-section'>
            <h1>Ваши коментарии</h1>

            <section className="scroll_section" ref={commentsContainerRef}>
                {commentsElements.length ? commentsElements : noCommentsElements}
            </section>

            <form ref={formRef} onSubmit={add}>
                <div className="commentmain">
                    <div className="b1">
                        <label>
                            <input required type="text" name="name" id="name" placeholder="Иван Иванов"/>
                        </label>
                    </div>
                </div>

                <label>
                    <textarea name="message" id="message" placeholder="Что вам понравилось?"></textarea>
                </label>

                <button type="submit">
                    Отправить
                </button>
            </form>
        </section>
    )
}

// Подтяжка + вывод по 10 штук, триггер подгрузки на проскролл контейнера
// Отправка на бэк + вывод этого же элемента без доп запросов.

export default CommentsSection
