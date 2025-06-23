document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = form.querySelector("button");
  const originalText = button.textContent;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    button.textContent = "Sending...";
    button.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        button.textContent = "Sent!";
        form.reset();
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
      button.textContent = originalText;
      button.disabled = false;
    }
  });
});
