

        var namMember = new Array(
            "Backseat (feat. Carly Rae Jepsen)",
            "Out of my Head (feat. Tove Lo and ALMA)",
            "Lucky",
            "Tears (feat. Caroline Polachek)",
            "I Got It (feat. Brooke Candy, Cupcakke and Pabllo Vittar)",
            "Femmebot (feat. Dorian Electra and Mykki Blanco)",
            "Delicious (feat. Tommy Cash",
            "Unlock It (feat. Kim Petras and Jay Park)",
            "Porsche (feat. MO)",
            "Track 10",
            "Vroom Vroom",
            "Paradise (feat. Hannah Diamond)",
            "Trophy",
            "Secret (Shh)"
        );



        //*********************************************************



        var lstMember = new Array();

        var parent = new Array();

        var equal = new Array();

        var rec = new Array();

        var cmp1, cmp2;

        var head1, head2;

        var nrec;



        var numQuestion;

        var totalSize;

        var finishSize;

        var finishFlag;



        //The initialization of the variable+++++++++++++++++++++++++++++++++++++++++++++

        function initList() {

            var n = 0;

            var mid;

            var i;



            //The sequence that you should sort

            lstMember[n] = new Array();

            for (i = 0; i < namMember.length; i++) {

                lstMember[n][i] = i;

            }

            parent[n] = -1;

            totalSize = 0;

            n++;



            for (i = 0; i < lstMember.length; i++) {

                //And element divides it in two/more than two

                //Increase divided sequence of last in first member

                if (lstMember[i].length >= 2) {

                    mid = Math.ceil(lstMember[i].length / 2);

                    lstMember[n] = new Array();

                    lstMember[n] = lstMember[i].slice(0, mid);

                    totalSize += lstMember[n].length;

                    parent[n] = i;

                    n++;

                    lstMember[n] = new Array();

                    lstMember[n] = lstMember[i].slice(mid, lstMember[i].length);

                    totalSize += lstMember[n].length;

                    parent[n] = i;

                    n++;

                }

            }



            //Preserve this sequence

            for (i = 0; i < namMember.length; i++) {

                rec[i] = 0;

            }

            nrec = 0;



            //List that keeps your results

            //Value of link initial

            // Value of link initial

            for (i = 0; i <= namMember.length; i++) {

                equal[i] = -1;

            }



            cmp1 = lstMember.length - 2;

            cmp2 = lstMember.length - 1;

            head1 = 0;

            head2 = 0;

            numQuestion = 1;

            finishSize = 0;

            finishFlag = 0;

        }



        //&#12522;&#12473;&#12488;&#12398;&#12477;&#12540;&#12488;+++++++++++++++++++++++++++++++++++++++++++

        //flag&#65306;Don't know characters

        // -1&#65306;Chose the left

        // 0&#65306;Tie

        // 1&#65306;Chose the right

        function sortList(flag) {

            var i;

            var str;



            //rec preservation

            if (flag < 0) {

                rec[nrec] = lstMember[cmp1][head1];

                head1++;

                nrec++;

                finishSize++;

                while (equal[rec[nrec - 1]] != -1) {

                    rec[nrec] = lstMember[cmp1][head1];

                    head1++;

                    nrec++;

                    finishSize++;

                }

            }

            else if (flag > 0) {

                rec[nrec] = lstMember[cmp2][head2];

                head2++;

                nrec++;

                finishSize++;

                while (equal[rec[nrec - 1]] != -1) {

                    rec[nrec] = lstMember[cmp2][head2];

                    head2++;

                    nrec++;

                    finishSize++;

                }

            }

            else {

                rec[nrec] = lstMember[cmp1][head1];

                head1++;

                nrec++;

                finishSize++;

                while (equal[rec[nrec - 1]] != -1) {

                    rec[nrec] = lstMember[cmp1][head1];

                    head1++;

                    nrec++;

                    finishSize++;

                }

                equal[rec[nrec - 1]] = lstMember[cmp2][head2];

                rec[nrec] = lstMember[cmp2][head2];

                head2++;

                nrec++;

                finishSize++;

                while (equal[rec[nrec - 1]] != -1) {

                    rec[nrec] = lstMember[cmp2][head2];

                    head2++;

                    nrec++;

                    finishSize++;

                }

            }



            //Processing after finishing with one list

            if (head1 < lstMember[cmp1].length && head2 == lstMember[cmp2].length) {

                //List the remainder of cmp2 copies, list cmp1 copies when finished scanning

                while (head1 < lstMember[cmp1].length) {

                    rec[nrec] = lstMember[cmp1][head1];

                    head1++;

                    nrec++;

                    finishSize++;

                }

            }

            else if (head1 == lstMember[cmp1].length && head2 < lstMember[cmp2].length) {

                //List the remainder of cmp1 copies, list cmp2 copies when finished scanning

                while (head2 < lstMember[cmp2].length) {

                    rec[nrec] = lstMember[cmp2][head2];

                    head2++;

                    nrec++;

                    finishSize++;

                }

            }



            //When it arrives at the end of both lists

            //Update a pro list

            if (head1 == lstMember[cmp1].length && head2 == lstMember[cmp2].length) {

                for (i = 0; i < lstMember[cmp1].length + lstMember[cmp2].length; i++) {

                    lstMember[parent[cmp1]][i] = rec[i];

                }

                lstMember.pop();

                lstMember.pop();

                cmp1 = cmp1 - 2;

                cmp2 = cmp2 - 2;

                head1 = 0;

                head2 = 0;



                //Initialize the rec before performing the new comparison

                if (head1 == 0 && head2 == 0) {

                    for (i = 0; i < namMember.length; i++) {

                        rec[i] = 0;

                    }

                    nrec = 0;

                }

            }



            if (cmp1 < 0) {

                str = "battle #" + (numQuestion - 1) + "<br>" + Math.floor(finishSize * 100 / totalSize) + "% sorted.";

                document.getElementById("battleNumber").innerHTML = str;



                showResult();

                finishFlag = 1;

            }

            else {

                showImage();

            }

        }



        //The results+++++++++++++++++++++++++++++++++++++++++++++++

        //&#38918;&#20301;=Rank/Grade/Position/Standing/Status

        //&#21517;&#21069;=Identification term

        function showResult() {

            var ranking = 1;

            var sameRank = 1;

            var str = "";

            var i;



            str += "<h3>POP 2/VROOM VROOM RANK</h3><table id=\"resultsTable\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">";

            str += "<tr class=\"header\"><td>rank<\/td><td>track<\/td><\/tr>";



            for (i = 0; i < namMember.length; i++) {

                str += "<tr class=\"row\"><td style=\"padding-right:5px;\">" + ranking + "<\/td><td style=\"padding-left:5px;\">" + namMember[lstMember[0][i]] + "<\/td><\/tr>";

                if (i < namMember.length - 1) {

                    if (equal[lstMember[0][i]] == lstMember[0][i + 1]) {

                        sameRank++;

                    } else {

                        ranking += sameRank;

                        sameRank = 1;

                    }

                }

            }

            str += "<\/table><img src=\"poster.jpg\" id=\"poster\"/>";



            document.getElementById("resultField").innerHTML = str;

        }



        //Indicates two elements to compare+++++++++++++++++++++++++++++++++++

        function showImage() {

            var str0 = "<strong>battle #" + numQuestion + "</strong><br>" + Math.floor(finishSize * 100 / totalSize) + "% sorted.";

            var str1 = "" + toNameFace(lstMember[cmp1][head1]);

            var str2 = "" + toNameFace(lstMember[cmp2][head2]);



            document.getElementById("battleNumber").innerHTML = str0;

            document.getElementById("leftField").innerHTML = str1;

            document.getElementById("rightField").innerHTML = str2;



            numQuestion++;

        }



        //Convert numeric value into a name (emoticon)+++++++++++++++++++++++++++++++

        function toNameFace(n) {

            var str = namMember[n];



            /*
             
            str += '<br />';
             
            switch(n) {
             
            //case -1 Because it is a sample, delete it
             
            case -1: str+=""; break;
             
            }*/

            return str;

        }


