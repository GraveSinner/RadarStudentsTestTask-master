class Table {
    private students: string[][];

    constructor(array: string[][])
    {
        this.students = array;
    }

    delete(i:any): void //Удаление последнего элемента
    {
        //this.students.pop();
        this.students.splice(i);
        console.log("Был удален "+ (i+1) +" элемент.\nНовый список:");
        this.print(); 
    }

    input(): void //Добавление последнего элемента
    {
        this.students.push(["4", "Байден", "Джооооооооооооооооооооооооооо", "Омерика", "-1"]);
        console.log("Был добавлен новый элемент.\nНовый список:");
        this.print(); 
    }

    print(): void
    { 
        let i: number;
        let j: number;
        let max1 = 0;
        let max2 = 0;
        let max3 = 0;
        for (i=0;i< this.students.length;i++)
        {
            for (j=1;j<this.students[i].length;j++)
            {
                if (j == 1) //фамилия
                {
                    if (this.students[i][j].length > max1) max1 = this.students[i][j].length;
                }
                if (j==2) //имя
                {
                    if (this.students[i][j].length > max2)  max2 = this.students[i][j].length;
                }
                if (j==3) //город
                {
                    if (this.students[i][j].length > max3) max3 = this.students[i][j].length;
                }
            }
        }
        console.log("№ |" + " Фамилия" + " ".repeat(max1-7),"|" + " Имя" + " ".repeat(max2-3),"|" + " Город" + " ".repeat(max3-5) + " |" + "Баллы |");
        for (i=0;i<this.students.length;i++)
        {
            console.log(this.students[i][0] + " |",
            this.students[i][1] + " ".repeat(max1 - this.students[i][1].length) + " |",
            this.students[i][2] + " ".repeat(max2 - this.students[i][2].length) + " |",
            this.students[i][3] + " ".repeat(max3 - this.students[i][3].length) + " |", 
            this.students[i][4] + " ".repeat(4 - this.students[i][4].length) + " |");
        }
        console.log("\n");
    }
}

export default Table;