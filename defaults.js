const template = (head, title, body) => {
  const file = window.location.href.split("/").pop();
  const header_code = `
      <div class="header-name">
        <img src="img/profile.jpg" alt="" height="60px" />
        <p style="margin-left: 20px;">Builded By Aditya Kumar</p>
      </div>
      <div style="margin-right: 50px">
        <p>Project Name:&nbsp;&nbsp;<code>${title}</code></p>
      </div>
    `;
  const final_template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="global.css">
    <link rel="stylesheet" href="defaults.css">
  </head>
    <body>
    <header>
        ${header_code}
    </header>
    <main>
        <div class="info">
        <h3>
        Edit Code on:&nbsp;&nbsp;<a
          href="https://github.com/kunduaditya/school-project/blob/main/${file}"
          target="_blank"
          ><code class="index">${file}</code></a
        >
      </h3>
      <h3>
        <a href="index.html"
          ><code class="view-all" style="font-size: 20px"
            >View All Projects</code
          ></a
        >
      </h3>
    </div>
        </div>
        <div class="content">
        <center>
            <h1>${title}👇</h1>
            ${body.innerHTML}
        </center>
        </div>
    </main>
    <footer>
        <p align="center">Powered By <b style="text-decoration: underline;">New Styling Method using Javascript.</b></p>
        <p>
        <strong>What I Did?</strong><br/>
        I wanted a new way to code but without the need of any CSS or format codes. So I created a new method to code. I used Javascript to create a new method.<br/>
        <strong>How I Did / How it Works?</strong><br/>
        From now, I only create a HTML file with simple HTML tags and add the single Script file. Then, Javascript gets the body, title, head and analyze it. After analyzing, it creates a format with the HTML tags and CSS and renders it.
        </p>
        <strong>Is it Responsive?</strong><br/>
        Yes, it is fully responsive and works on all devices.
        </p>
        <hr/>
        <center>
        <div class="more-info">
            <img src="/img/profile.jpg"/>
            <h1>Aditya Kumar</h1>
            <button onclick="handleHTML()">Toogle Content Created in HTML File</button>
        </div>
        </center>
    </footer>
    `;
  document.getElementsByTagName("body")[0].innerHTML = final_template;
  //   Make every table inside div class="table-container"
  const table = document.getElementsByTagName("table");
  for (let i = 0; i < table.length; i++) {
    const table_container = document.createElement("div");
    table_container.classList.add("table-container");
    table[i].parentNode.insertBefore(table_container, table[i]);
    table_container.appendChild(table[i]);
  }
};

window.onload = function () {
  const body = document.getElementsByTagName("body")[0];
  const title = document.getElementsByTagName("title")[0];
  const head = document.getElementsByTagName("head")[0];
  template(head, title.innerHTML, body);
};

async function handleHTML() {
  const content = document.getElementsByClassName("content")[0];
  content.classList.toggle("content-toggle");
  content.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
