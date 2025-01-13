import {IsInt, IsOptional, Min} from "class-validator";
import {Type} from "class-transformer";

export class TaskQueryDto {
    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    page: number;
    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    limit: number;
}