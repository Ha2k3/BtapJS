    const API_URL = "https://63aa9f2dfdc006ba604736ec.mockapi.io"; 
        function callAPI(endpoint, method = "GET", body) {
            return axios({
                method: method,
                url: `${API_URL}/${endpoint}`,
                data: body,
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        var id;
        function save() {
            let user = [];
            callAPI("users", "GET", null).then((res) => {
                user = res.data;})
            for ( let i = 0; i < user.length; i++){
                id = i;
            }
            var email=document.getElementById("emailproduct").value;
            var usersname = document.getElementById("usersnameproduct").value;
            var password = document.getElementById("passwordproduct").value;
            var name = document.getElementById("nameproduct").value;
            var profile_picture = document.getElementById("imgproduct").value;
            let image = profile_picture.split("\\")[2];
            if (email |usersname | name | (password != "")) {
                var oneProduct = {
                    id: id,
                    email: email,
                    usersname: usersname,
                    password: password,
                    name: name,
                    profile_picture: "images/" + image,
                };
                callAPI("users","POST", oneProduct).then((response) => {
                    show();
                    alert("Save successfully!");
                });
            } else {
                reset();
            }
        }

        function show() {
            var userss = [];
            callAPI("users", "GET", null).then((res) => {
                userss = res.data;
                let row = "";
                for (i in userss) {
                    row += "<tr>";
                    row += "<td>" + userss[i].id + "</td>";
                    row += "<td>" + userss[i].email + "</td>";
                    row += "<td>" + userss[i].usersname + "</td>";
                    row += "<td>" + userss[i].password + "</td>";
                    row += "<td>" + userss[i].name + "</td>";
                    row +="<td>" + "<img src='" + userss[i].profile_picture + "style='width: 80px; height: 80px; >" + "</td>";
                    row +="<td>" +`<button type="button" onclick="editsp (${userss[i].id})" class="btn btn-success">Edit</button></td>`;
                    row +="<td>" + `<button type="button" onclick="deletesp (${userss[i].id})" class="btn btn-danger">Delete</button></td>`;
                    row += "</tr>";
                }
                document.getElementById("tab").innerHTML += row;
            })
        }

        function editsp(id) {
            callAPI(`users/${id}`, "GET", null).then((res) => {
                let usersup = [];
                usersup = res.data;
                console.log(usersup);
                document.getElementById("emailproduct").value=usersup.email;
                document.getElementById("usersnameproduct").value = usersup.usersname;
                document.getElementById("passwordproduct").value = usersup.password;
                document.getElementById("nameproduct").value = usersup.name;
            });
            document.getElementById("ok").style.display = "none";
            document.getElementById("edit").style.display = "block";
            document.getElementById("edit").innerHTML =`<button type='button' onclick='editok (${id})' class='btn btn-success'>Update</button>`;
        }

        function editok(id) {
            var email = document.getElementById("emailproduct").value;
            var usersname = document.getElementById("usersnameproduct").value;
            var password = document.getElementById("passwordproduct").value;
            var name = document.getElementById("nameproduct").value;
            let profile_picture = document.getElementById("imgproduct").value;
            var image =profile_picture.split("\\")[2];
            var oneProduct = {
                id: id,
                email: email,
                usersname: usersname,
                password: password,
                name: name,
                img: "images/" + image
            }
            callAPI(`users/${id}`,"PUT",oneProduct).then((respense) => {
                alert("Update successfully!");
                show();
            });
            if (document.getElementById("edit").style.display = "block") {
                document.getElementById("edit").style.display = "none";
                document.getElementById("ok").style.display = "block";
            } else {
                document.getElementById("edit").style.display = "block";
                document.getElementById("ok").style.display = "none";
            }
            reset();}

        function deletesp (id) {
            var r = confirm("Do you want delete this account?")
            if ( r == true) {
            callAPI (`users/${id}`,"DELETE", null).then((response) => {
                show();
                alert("Delete successfully!")
            });
            } else {
            window.location.href ="http://127.0.0.1:5500/JS/hatest/update.html";
        }
    }
        function reset() {
            document.getElementById("emailproduct").value="";
            document.getElementById("usersnameproduct").value ="";
            document.getElementById("passwordproduct").value ="";
            document.getElementById("nameproduct").value ="";
            document.getElementById("imgproduct").value =""; }


