let localStTitle = localStorage.getItem("title");
let localStCategory = localStorage.getItem("category");
let newsAPI = "https://65365804bb226bb85dd1f271.mockapi.io/api/v1/post";

localStorage.setItem("title", "");
localStorage.setItem("category", "");

$(document).ready(function () {
  $.ajax({
    url: newsAPI,
    type: "POST",
    dataType: "json",
  }).done(function (response) {
    let content = "";
    response.forEach((post) => {
      content += `
        <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="post-thumbnail">
                        <img src="https://bit.ly/3wD8xjv" alt="" />
                      </div>
                    </div>

                    <div class="col-12 col-lg-6">
                      <div class="post-content">
                        <a href="" class="btn-decor">${post.category}</a>
                        <a href="" class="post-title"
                          >${post.title}</a
                        >
                        <div class="post-meta">
                          <a href="" class="post-author">${post.autor}</a>
                          <i class="ri-user-6-fill"></i>
                          <a href="" class="post-date">${post.date}</a>
                        </div>
                        <p class="content">
                          ${post.content}
                        </p>
                        <div class="post-meta d-flex">
                          <a href="#"><i class="ri-message-3-line"></i> ${post.comment}</a>
                          <a href="#"><i class="ri-eye-line"></i> ${post.view}</a>
                          <a href="#"><i class="ri-thumb-up-line"></i> ${post.reaction}</a>
                        </div>
                      </div>
                    </div>
                  </div>
        `;
    });
    $(".render-area").html(content);
  });
});
