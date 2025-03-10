interface Tasks {
    id: number
    title: string
    states: string
    startDate: string
    endDate: string
}


const Task: Tasks []  = JSON.parse(localStorage.getItem("Task") || "[]") 




function Add() {
    const Ttitle = document.getElementById("Ttitle") as HTMLInputElement;
    const Tstates = document.getElementById("Tstates") as HTMLInputElement;
    const Tstart = document.getElementById("Tstart") as HTMLInputElement;
    const Tend = document.getElementById("Tend") as HTMLInputElement;

    if (!Ttitle.value || !Tstates.value || !Tstart.value || !Tend.value) {
        alert("All fields are required!");
        return;
    }

    let Id = Task.length + 1;
    const task: Tasks = {
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
    if (!TasksTable) return;

    const tbody = TasksTable.querySelector("tbody");
    if (!tbody) return;

    tbody.innerHTML = "";

    var retrievedData = localStorage.getItem("Task");
    if (!retrievedData) return;

    var TaskData: Tasks[] = JSON.parse(retrievedData);
    if (!Array.isArray(TaskData)) return;

    TaskData.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>
                <span class="ms-2">${t.title}</span>
            </th>
            <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-danger">${t.states}</span></h6>
            </td>
            <td class="align-middle">
                <span>${t.startDate}</span>
            </td>
            <td class="align-middle">
                <span>${t.endDate}</span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", View);





