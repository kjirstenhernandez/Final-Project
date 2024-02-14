const apiURL =
  "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_vYBougwwbfP7f8jXBY8yn9ZffrNnOREGScRBlKkw9QTQOX9ZtYv6C1dNceQuRbAZ";

export async function getData() {
  const response = await fetch(apiURL);
  const data = await convertToJson(response);
  return data.Result;
}

export function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function loadPartials(
  headerID,
  footerID,
  navID,
  headerPath,
  footerPath,
  navPath
) {
  const header_element = document.getElementById(headerID);
  const footer_element = document.getElementById(footerID);
  const nav_element = document.getElementById(navID);

  const header_response = await fetch(headerPath);
  const footer_response = await fetch(footerPath);
  const nav_response = await fetch(navPath);

  const header_template = await header_response.text();
  const footer_template = await footer_response.text();
  const nav_template = await nav_response.text();

  header_element.insertAdjacentHTML("afterbegin", header_template);
  footer_element.insertAdjacentHTML("afterbegin", footer_template);
  nav_element.insertAdjacentElement("afterbegin", nav_template);
}
