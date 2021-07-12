$(document).ready(function() {
    $("#btn").click(function() {
        var integer = $("#num").val();
        let select = $("#currency1 option:selected").val();
        let select2 = $("#currency2 option:selected").val();
        var output = 0;
        if(integer == "") {
            $("#num").addClass("error");
        } else {
            $("#num").removeClass("error");
            if(select == "peso") {
                if(select2 == "usd") {
                    output = integer * 0.020;
                } else if(select2 == "euro") {
                    output = integer * 0.017;
                } else if(select2 == "jpy") {
                    output = integer * 2.20;
                } else if(select2 == "cad") {
                    output = integer * 0.025;
                } else if(select2 == "aud") {
                    output = integer * 0.027;
                } else if(select2 == "afn") {
                    output = integer * 1.63;
                } else if(select2 == "bdt") {
                    output = integer * 1.69;
                } else if(select2 == "khr") {
                    output = integer * 81.16;
                } else {
                    output = integer 
                }
            } else if(select == "usd") {
                if(select2 == "peso") {
                    output = integer * 50.13;
                } else if(select2 == "euro") {
                    output = integer * 0.84;
                }  else if(select2 == "jpy") {
                    output = integer * 110.17;
                } else if(select2 == "cad") {
                    output = integer * 1.25;
                } else if(select2 == "aud") {
                    output = integer * 1.34;
                } else if(select2 == "afn") {
                    output = integer * 81.70;
                } else if(select2 == "bdt") {
                    output = integer * 84.62;
                } else if(select2 == "khr") {
                    output = integer * 4066.61;
                } else {
                    output = integer 
                }
            } else if(select == "euro") {
                if(select2 == "usd") {
                    output = integer * 1.19;
                } else if(select2 == "peso") {
                    output = integer * 59.48;
                } else if(select2 == "jpy") {
                    output = integer * 130.77;
                } else if(select2 == "cad") {
                    output = integer * 1.48;
                } else if(select2 == "aud") {
                    output = integer * 1.59;
                } else if(select2 == "afn") {
                    output = integer * 97.00;
                } else if(select2 == "bdt") {
                    output = integer * 100.46;
                } else if(select2 == "khr") {
                    output = integer * 4827.92;
                } else {
                    output = integer 
                }
            } else if(select == "jpy") {
                if(select2 == "usd") {
                    output = integer * 0.0091;
                } else if(select2 == "peso") {
                    output = integer * 0.46;
                } else if(select2 == "euro") {
                    output = integer * 0.0077;
                } else if(select2 == "cad") {
                    output = integer * 0.011;
                } else if(select2 == "aud") {
                    output = integer * 0.012;
                } else if(select2 == "afn") {
                    output = integer * 0.74;
                } else if(select2 == "bdt") {
                    output = integer * 0.77;
                } else if(select2 == "khr") {
                    output = integer * 36.95;
                } else {
                    output = integer 
                }
            } else if(select == "cad") {
                if(select2 == "usd") {
                    output = integer * 0.80;
                } else if(select2 == "peso") {
                    output = integer * 40.19;
                } else if(select2 == "euro") {
                    output = integer * 0.67;
                } else if(select2 == "jpy") {
                    output = integer * 88.17;
                } else if(select2 == "aud") {
                    output = integer * 1.07;
                } else if(select2 == "afn") {
                    output = integer * 65.50;
                } else if(select2 == "bdt") {
                    output = integer * 67.84;
                } else if(select2 == "khr") {
                    output = integer * 3259.89;
                } else {
                    output = integer 
                }
            }  else if(select == "aud") {
                if(select2 == "usd") {
                    output = integer * 0.75;
                } else if(select2 == "peso") {
                    output = integer * 37.42;
                } else if(select2 == "euro") {
                    output = integer * 0.63;
                } else if(select2 == "jpy") {
                    output = integer * 82.16;
                } else if(select2 == "cad") {
                    output = integer * 0.93;
                } else if(select2 == "afn") {
                    output = integer * 61.01;
                } else if(select2 == "bdt") {
                    output = integer * 63.19;
                } else if(select2 == "khr") {
                    output = integer * 3036.62;
                } else {
                    output = integer 
                }
            } else if(select == "afn") {
                if(select2 == "usd") {
                    output = integer * 0.012;
                } else if(select2 == "peso") {
                    output = integer * 0.61;
                } else if(select2 == "euro") {
                    output = integer * 0.010;
                } else if(select2 == "jpy") {
                    output = integer * 1.35;
                } else if(select2 == "cad") {
                    output = integer * 0.015;
                } else if(select2 == "aud") {
                    output = integer * 0.016;
                } else if(select2 == "bdt") {
                    output = integer * 1.04;
                } else if(select2 == "khr") {
                    output = integer * 49.77;
                } else {
                    output = integer 
                }
            } else if(select == "bdt") {
                if(select2 == "usd") {
                    output = integer * 0.012;
                } else if(select2 == "peso") {
                    output = integer * 0.59;
                } else if(select2 == "euro") {
                    output = integer * 0.0100;
                } else if(select2 == "jpy") {
                    output = integer * 1.30;
                } else if(select2 == "cad") {
                    output = integer * 0.015;
                } else if(select2 == "aud") {
                    output = integer * 0.016;
                } else if(select2 == "afn") {
                    output = integer * 0.97;
                } else if(select2 == "khr") {
                    output = integer * 48.07;
                } else {
                    output = integer 
                }
            } else if(select == "khr") {
                if(select2 == "usd") {
                    output = integer * 0.00025;
                } else if(select2 == "peso") {
                    output = integer * 0.012;
                } else if(select2 == "euro") {
                    output = integer * 0.00021;
                } else if(select2 == "jpy") {
                    output = integer * 0.027;
                } else if(select2 == "cad") {
                    output = integer * 0.00031;
                } else if(select2 == "aud") {
                    output = integer * 0.00033;
                } else if(select2 == "afn") {
                    output = integer * 0.020;
                } else if(select2 == "bdt") {
                    output = integer * 0.021;
                }  else {
                    output = integer 
                }
            }
            $("#num2").val(output);
        }
    }
    );
});