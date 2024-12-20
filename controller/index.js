const getHome = (req, res) => {
  //   res.send('안녕하세요!');
  res.render('index.html', {
    title: '웹개발 실습',
    subtitle: '사용자 등록 폼'
});
};

export default { getHome };
