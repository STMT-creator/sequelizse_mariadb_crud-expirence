/**
 * 사용자 등록 폼
 * POST /users
 * name, age, married
 */

const regiForm = document.querySelector("#regi-form");
regiForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const age = e.target.age.value;
    const married = e.target.married.checked;

    const response = await fetch("/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            age,
            married
        }),
    });
    const data = await response.json();
    console.log(data)
});