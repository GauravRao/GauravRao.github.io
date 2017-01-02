$(document).ready(function() {

    $('input[type=radio][name=selectImg]').change(function() {
        console.log('clicked');
        if (this.value == '1800.00') {
            console.log();
            $('.amountCls').text('1800.00');
        } else if (this.value == '5800.00') {
            $('.amountCls').text('5800.00');
        } else if (this.value == '7200.00') {
            $('.amountCls').text('7200.00');
        } else {
            $('.amountCls').text('15200.00');
        }
    });
    $("#date-picker").datepicker({dateFormat: 'dd-mm-yy'});
    $(".datepicker-trigger").on("click", function() {
        $("#date-picker").datepicker("show");
    });

});
