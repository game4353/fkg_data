"use strict";
class Table {
    constructor(arr) {
        this.cols = [];
        this.table = $("<div class='table'>").append(this.thead = $("<div class='thead'>").append(this.filters = $("<div class='th'>"), this.headers = $("<div class='th'>")), this.tbody = $("<div class='tbody'>"));
        this.tbody.on('scroll', _ => lazy(this.tbody));
        const filterClass = arr[0].map((v, i) => `.hide_${i}`).join(',');
        $("head").append(`<style>${filterClass} { display: none }</style>`);
        for (let c = 0; c < arr[0].length; c++) {
            this.cols[c] = [];
            this.filters.append(this.td(c).append(this.filter(c)));
            this.headers.append(this.td(c).text(arr[0][c]));
        }
        for (let r = 1; r < arr.length; r++) {
            let tr = $("<div class='tr'>");
            this.tbody.append(tr);
            for (let c = 0; c < arr[r].length; c++) {
                if (arr[r][c] && arr[r][c].toDiv) {
                    const div = arr[r][c].toDiv();
                    this.cols[c].push(div);
                    tr.append(div);
                }
                else
                    tr.append(this.td(c).html(arr[r][c]).val(arr[r][c]));
            }
        }
    }
    setWidth(arr) {
        arr.forEach((width, i) => {
            this.cols[i].forEach(td => {
                td.width(width);
            });
        });
    }
    td(col) {
        const div = $("<div class='td'>");
        this.cols[col].push(div);
        return div;
    }
    filter(col) {
        let table = this;
        return $("<input type='text' class='filter'>")
            .on('input', function () {
            let val = $(this).val();
            table.cols[col].forEach(td => {
                let tr = td.parent();
                if (tr.hasClass('th'))
                    return;
                if (td.val().match(val))
                    tr.removeClass(`hide_${col}`);
                else
                    tr.addClass(`hide_${col}`);
            });
            lazy(table.tbody);
        });
    }
}
