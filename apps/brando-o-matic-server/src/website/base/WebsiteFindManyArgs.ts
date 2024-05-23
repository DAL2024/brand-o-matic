/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WebsiteWhereInput } from "./WebsiteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WebsiteOrderByInput } from "./WebsiteOrderByInput";

@ArgsType()
class WebsiteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WebsiteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WebsiteWhereInput, { nullable: true })
  @Type(() => WebsiteWhereInput)
  where?: WebsiteWhereInput;

  @ApiProperty({
    required: false,
    type: [WebsiteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WebsiteOrderByInput], { nullable: true })
  @Type(() => WebsiteOrderByInput)
  orderBy?: Array<WebsiteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WebsiteFindManyArgs as WebsiteFindManyArgs };
