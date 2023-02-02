const form = document.querySelector("#tag-form");
const tagStore = [];


const tagIsEmpty = tag => {
    if (tag == undefined || tag == null || tag.length <= 0) {
        alert("태그가 비어있습니다.");
        return false;
    }
    return true;
};



/*const makeTag = tag => {
    const tagWrap = document.createElement("div");
    tagWrap.className = "tag";
    tagWrap.addEventListener("click", removeTag);

    const tagTitle = document.createElement("p");
    tagTitle.textContent = tag;

    tagWrap.appendChild(tagTitle);

    return tagWrap
};

const appendTag = (parentId, referenceId, newNode) => {
    const parentElement = document.querySelector(`#${parentId}`);
    const referenceElement = document.querySelector(`#${referenceId}`);
    parentElement.insertBefore(newNode,referenceElement );
};*/ 

const clearTextContent = targetId => {
    const target = document.querySelector(`#${targetId}`);
    target.value = '';
};

function addTag(e) { 
    e.preventDefault();

    const input = document.querySelector("input");
    const tagList = document.querySelector(".tag-list");

    if (tagStore.includes(input.value)===false) { //중복체크
        
        const createTag = document.createElement("li");

        createTag.innerText = input.value;
        createTag.className = "tag";
        
        tagList.appendChild(createTag);
        tagStore.push(input.value);
    }

    input.value = "";
    updateTags(); // tag추가시 계속 함수호출
}

const removeTag = e => {
    e.currentTarget.remove(); // e.currentTarget = 이벤트가 발생한 태그 
    console.log(e.target)
};

function updateTags() {
    const li = document.querySelectorAll(".tag");
    console.log(li);
    [...li].forEach(tag => {
        tag.addEventListener("click", removeTag)
    })
}

const tagForm = document.querySelector("#tag-form");
tagForm.addEventListener("submit", addTag);