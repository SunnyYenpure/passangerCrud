import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

let arr = [MatButtonModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatCardModule, MatDividerModule]


@NgModule({
    imports: [...arr],
    exports: [...arr]
})
export class MaterialModule { }