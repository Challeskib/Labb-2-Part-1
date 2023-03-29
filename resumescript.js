fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const title1 = data.title1;
    const title2 = data.title2;
    const w1 = data.w1;
    const w2 = data.w2;
    const w3 = data.w3;
    const s1 = data.s1;
    const s2 = data.s2;
    const s3 = data.s3;

    document.getElementById("work-experience-title1").textContent =
      title1;
    document.getElementById("work-experience-title2").textContent =
      title2;
    document.getElementById("w1").textContent = w1;
    document.getElementById("w2").textContent = w2;
    document.getElementById("w3").textContent = w3;
    document.getElementById("s1").textContent = s1;
    document.getElementById("s2").textContent = s2;
    document.getElementById("s3").textContent = s3;
  });
