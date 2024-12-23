/**
 * 사용자 등록 폼
 * POST /users
 * name, age, married
 */

const regiForm = document.querySelector('#regi-form');
regiForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  const age = e.target.age.value;
  const married = e.target.married.checked;

  const response = await axios.post('/users', {
    name,
    age,
    married,
    headers: {
      'Content-Type': 'application/json',
    },
  });
// const data = await response.json();
  getUsers();
  // 사용자 목록 조회: 함수 작성
});

/**
 * 사용자 목록 조회
 * GET /users
 */
const getUsers = async () => {
    const res = await axios.get("/users");
    console.log(res.data);
};
