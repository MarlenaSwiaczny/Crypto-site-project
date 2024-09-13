import style from "./Info.module.scss"

function Info() {
    return (
        <>
        <div className={style.container}>
        <h1>My Crypto Site</h1>
        <p>This is my first crypto site. Here are actual values of 4 most common cryptocoins.</p>
        </div>
        </>
    )
}

export default Info;