import { Position } from './position';
export * from './position';
export class Models implements Position{
    availableColumns: number;
    availableRows: number;
    column?: number;
    row?: number;
    value?: string;
    
    ValueAtPosition(col: number, row: number, scanResult:any): string {
           scanResult.forEach(element => {
            if(element.column == col && element.row == row) {
                return element.value;
            }
        });
        return null;      
    }
    CompareScanResults(CurrentScan: any, PreviousScan: any): string {

        for(var column = CurrentScan.availableColumns; column >= 1; column-- ){
            for(var row = CurrentScan.availableRows; row >= 1; row --){
                var barCodeValueTwo = CurrentScan.ValueAtPosition(column, row);
                var barCodeValueOne = PreviousScan.ValueAtPosition(column, row);
                if (barCodeValueOne != barCodeValueTwo) {
                    return barCodeValueTwo;
                }else {
                    return "no change";
                }
            }
        }
    }  
}