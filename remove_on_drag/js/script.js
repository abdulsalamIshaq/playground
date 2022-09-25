
fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((users) => {
        document.querySelector('.isLoading').style.visibility = 'hidden';

        users.data.forEach(user => {
            const { id, first_name, last_name } = user;

            let list = document.createElement('li');
            list.setAttribute('id', id)
            list.setAttribute('draggable', true)
            list.setAttribute('ondragend', "onDrag(event)")
            const node = document.createTextNode(first_name + ' ' + last_name);
            list.appendChild(node);

            document.getElementById('user-list').appendChild(list);

        });

    });

const onDrag = (event) => {
    document.getElementById(event.target.id).remove();
};
