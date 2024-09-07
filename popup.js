document.getElementById("addButton").addEventListener("click", () => {
    const company = document.getElementById("companyInput").value.trim();
    if (company) {
      // Send a message to the background script to add the company
      chrome.runtime.sendMessage({ action: "addCompany", company }, (response) => {
        if (response.success) {
          alert("Company added to blacklist!");
          document.getElementById("companyInput").value = "";
        }
      });
    }
  });
  