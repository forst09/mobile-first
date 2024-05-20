function openAcc(item, n) {
    item.classList.add("active");
    item.parentElement.classList.add("active");
    item.nextElementSibling.style.height = "auto";
    item.nextElementSibling.style.opacity = "1";
    let height = item.nextElementSibling.clientHeight + n + "px";
    item.nextElementSibling.style.height = "0px";
    setTimeout(function () {
        item.nextElementSibling.style.height = height;
    }, 0);
}

function closeAcc(item) {
    item.classList.remove("active");
    item.parentElement.classList.remove("active");
    item.nextElementSibling.style.height = item.nextElementSibling.clientHeight + "px";
    item.nextElementSibling.style.opacity = '0';
    setTimeout(function () {
        item.nextElementSibling.style.height = "0px";
    }, 0);
}

function accordions(arr, n, open) {
    if (arr.length != 0) {
        if (open) {
            openAcc(arr[0], n);
        }
        arr.forEach(function (item, i) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                arr.forEach((item, k) => {
                    if (k != i) {
                        closeAcc(item);
                    }
                });
                if (!item.classList.contains("active")) {
                    openAcc(item, n);
                } else {
                    closeAcc(item);
                }
            });
        });
    }
};

export { accordions };

