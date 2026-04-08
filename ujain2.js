
document.getElementById('tampil').onclick = function(){
	var nama=document.getElementById('name').value.trim();
	if (nama==="") {
		nama="('Nama Harus Diisi')";
	}
    var gender ="";
	var radios = document.getElementsByName('gender');
	for( var i=0; i<radios.length; i++){
		if (radios[i].checked){
			gender=radios[i].value;
			break;


		}
}		
		if (gender===""){
			gender="('Jenis Kelamin Belum Diisi')";
		}
		var setuju=document.getElementById('setuju').checked ? "ya" :"Tidak";
		var show = "Nama:" + nama + "\nGender:" + gender + "\nSetuju:" + setuju;
		document.getElementById('hasil').innerText = show;
}		
		