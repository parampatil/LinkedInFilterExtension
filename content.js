// Function to filter jobs based on the blacklist
function filterJobs(blacklist) {
    const jobElements = document.querySelectorAll("job-card-container__primary-description");
     
    jobElements.forEach((job) => {
      const companyName = job.innerText.trim();
      console.log(companyName);
      if (blacklist.includes(companyName)) {
        // Hide the job card
        const jobCard = job.closest(".jobs-search-results__list-item");
        console.log(jobCard);
        if (jobCard) {
          jobCard.style.display = "none";
        }
      }
    });
  }
  
  // Fetch the blacklist from the background script
  chrome.storage.sync.get("blacklist", (data) => {
    const blacklist = data.blacklist || [];
    filterJobs(blacklist);
  });
  