var Task = JSON.parse(localStorage.getItem("Task") || "[]");
function Add() {
    var Ttitle = document.getElementById("Ttitle");
    var Tstates = document.getElementById("Tstates");
    var Tstart = document.getElementById("Tstart");
    var Tend = document.getElementById("Tend");
    if (!Ttitle.value || !Tstates.value || !Tstart.value || !Tend.value) {
        alert("All fields are required!");
        return;
    }
    var Id = Task.length + 1;
    var task = {
        id: Id,
        title: Ttitle.value,
        states: Tstates.value,
        startDate: Tstart.value,
        endDate: Tend.value
    };
    Task.push(task);
    localStorage.setItem("Task", JSON.stringify(Task));
    View();
}
function View() {
    var TasksTable = document.getElementById("Tasks");
    if (!TasksTable)
        return;
    var tbody = TasksTable.querySelector("tbody");
    if (!tbody)
        return;
    tbody.innerHTML = "";
    var retrievedData = localStorage.getItem("Task");
    if (!retrievedData)
        return;
    var TaskData = JSON.parse(retrievedData);
    if (!Array.isArray(TaskData))
        return;
    TaskData.forEach(function (t) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <th>\n                <span class=\"ms-2\">".concat(t.title, "</span>\n            </th>\n            <td class=\"align-middle\">\n                <h6 class=\"mb-0\"><span class=\"badge bg-danger\">").concat(t.states, "</span></h6>\n            </td>\n            <td class=\"align-middle\">\n                <span>").concat(t.startDate, "</span>\n            </td>\n            <td class=\"align-middle\">\n                <span>").concat(t.endDate, "</span>\n            </td>\n        ");
        tbody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", View);
