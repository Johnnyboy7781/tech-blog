const editFormHandler = async (e) => {
    e.preventDefault();
  
    const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const post_title = document.querySelector('input').value.trim();
    const post_content = document.querySelector('textarea').value.trim();

    console.log(post_id, post_title, post_content);
  
    const res = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: post_title,
            content: post_content
        }),
        headers: {
          "Content-Type": "application/json",
        },
    });
  
    if (res.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(res.statusText);
    }
  };
  
  document
    .querySelector(".edit-post-form")
    .addEventListener("submit", editFormHandler);
  