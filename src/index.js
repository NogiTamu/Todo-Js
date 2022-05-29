import "./styles.css";
const addBtn = document.querySelector("#add-btn");
const incompUl = document.querySelector(".incomplete-ul");
const compUl = document.querySelector(".comp-ul");

const onClickadd = () => {
  const inputText = document.querySelector("#input").value;
  document.querySelector("#input").value = "";
  createIncompleteList(inputText);
};

addBtn.addEventListener("click", () => {
  onClickadd();
});

const deleteFromIncompleteList = (target) => {
  incompUl.removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const compBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  // -------------------------完了-----------------------------
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    deleteFromIncompleteList(compBtn.parentNode);

    const addTarget = compBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null; //liの中身を空にする
    const p = document.createElement("p");
    p.innerText = text;

    const buckbtn = document.createElement("button");
    buckbtn.addEventListener("click", () => {
      const deleteTarget = buckbtn.parentNode;
      compUl.removeChild(deleteTarget);

      const text = buckbtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    buckbtn.innerText = "戻す";
    addTarget.appendChild(p);
    addTarget.appendChild(buckbtn);
    compUl.appendChild(addTarget);
  });
  // -------------------------削除-----------------------------
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    deleteFromIncompleteList(delBtn.parentNode);
  });

  p.innerText = text;
  li.className = "todo-li";
  li.appendChild(p);
  li.appendChild(compBtn);
  li.appendChild(delBtn);
  incompUl.appendChild(li);
};
