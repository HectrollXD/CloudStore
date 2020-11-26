$(document).ready(main);

function main(){
    $("#pymes").click(
        function(){
            location.href = "../PYMES.CloudStore/";
        }
    );
    $("#market").click(
        function(){
            location.href = "../Market.CloudStore/";
        }
    );
};