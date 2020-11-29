
function selesai() {
    var anggota1 = document.getElementById("nama").value;
    var anggota2 = document.getElementById("gender").value;
    var anggota3 = document.getElementById("usia").value;
    var anggota4 = document.getElementById("pekerjaan").value;
    var anggota5 = document.getElementById("domisili").value;
    var anggota6 = document.getElementById("email").value;
    document.getElementById("rata_rata").innerHTML = alert("nama : " + anggota1 + "\nJenis Kelamin : " + anggota2
    + "\nUsia : " + anggota3 + "\nPekerjaan : " + anggota4 + "\nDomisili : " + anggota5 + "\nE-mail : " + anggota6);
    
}