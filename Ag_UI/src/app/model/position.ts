/**
 * Ziath API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Position { 
    column?: number;
    row?: number;
    value?: string | null;
    availableColumns: number;
    availableRows: number;
    ValueAtPosition(col: number,row: number, scanresult:any):string;
    CompareScanResults(CurrentScan:any, PreviousScan:any):string;

}
