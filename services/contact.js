function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
}

function handleSubmit(event) {
    event.preventDefault();
}