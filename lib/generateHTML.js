function buildCard(employeeList) {
  let card = "";

  employeeList.forEach(function (data) {
    data.getRole();
    //checking to see what .getRole is for each data set
    // if statements correspond with all three choices in the employeeQuestions() func
    //creating card if employee === manager
    if (data.getRole() === "Manager") {
      card += `<div class="card employee-card">
                <div class="card-header text-light bg-secondary">
                  <h2 class="card-title">${data.name}</h2>
                  <h3 class="card-title">
                    <i class="fas fa-mug-hot mr-2"></i> ${data.getRole()}
                  </h3>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">
                      Email: <a href="${data.email}">${data.email}</a>
                    </li>
                    <li class="list-group-item">Office number: ${data.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>`;
    }
    //creating card if employee === engineer
    if (data.getRole() === "Engineer") {
      card += ` <div class="card employee-card">
              <div class="card-header text-light bg-secondary">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title">
                <i class="fas fa-glasses mr-2"></i> ${data.getRole()}
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">
                    Email: <a href="${data.email}"> ${data.email}</a>
                  </li>
                  <li class="list-group-item">Github: ${data.getGithub()}</li>
                </ul>
              </div>
            </div>
            `;
    }
    //creating card if employee === intern
    if (data.getRole() === "Intern") {
      card += `<div class="card employee-card">
        <div class="card-header text-light bg-secondary">
          <h2 class="card-title">${data.name}</h2>
          <h3 class="card-title">
          <i class="fas fa-user-graduate mr-2"></i> ${data.getRole()}
          </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">
              Email: <a href="${data.email}"> ${data.email}</a>
            </li>
            <li class="list-group-item">School: ${data.getSchool()}</li>
          </ul>
        </div>
      </div>
      `;
    }
  });
  return card;
}
//generates the html
function generatehtml(employeeList) {
  return (
    `<!DOCTYPE html>
    <html lang="en">
      ​
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      ​
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron bg-light mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">` +
    buildCard(employeeList) +
    `</div>
            </div>
          </div>
        </body>
      </html>`
  );
}

module.exports = generatehtml;
