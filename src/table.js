class Table{
    constructor(arr){
        this.cols = []
        this.table = $("<div class='table'>").append(
            this.thead = $("<div class='thead'>").append(
                this.filters = $("<div class='th'>"),
                this.headers = $("<div class='th'>")
            ),
            this.tbody = $("<div class='tbody'>")
        )
        this.tbody.on('scroll', _ => lazy(this.tbody))

        for(let c in arr[0]){
            this.cols[c] = []
            this.filters.append(
                this.td(c).append(this.filter(c))
            )
            this.headers.append(
                this.td(c).text(arr[0][c])
            )
        }
        for(let r = 1; r < arr.length; r++){
            let tr = $("<div class='tr'>")
            this.tbody.append(tr)
            for(let c in arr[r]){
                tr.append(this.td(c).html(arr[r][c]).val(arr[r][c]))
            }
        }
    }
    setWidth(arr){
        for (let i in arr) {
            if (arr[i]){
                this.cols[i].forEach(td => {
                    td.width(arr[i])
                })
            }
        }
    }
    td(col){
        const div = $("<div class='td'>")
        this.cols[col].push(div)
        return div
    }
    filter(col){
        let table = this
        return $("<input type='text' class='filter'>")
        .on('input', function(){
            let val = $(this).val()
            table.cols[col].forEach(td => {
                let tr = td.parent()
                if(!val) tr.removeClass(`hide_${col}`)
                else if(td.val().match(val)) tr.removeClass(`hide_${col}`)
                else tr.addClass(`hide_${col}`)
            })
            lazy(table.tbody)
        })
    }
}