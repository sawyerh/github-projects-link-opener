function openIssue(url) {
  window.location.href = url;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('[data-testid="card-side-panel-trigger"]');
  if (!link) return;

  const href = link.href;
  if (href.includes("/issues/")) {
    openIssue(href);
  }
});
