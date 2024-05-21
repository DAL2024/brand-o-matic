/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WebsiteWhereInput } from "./WebsiteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WebsiteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WebsiteWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereInput)
  @IsOptional()
  @Field(() => WebsiteWhereInput, {
    nullable: true,
  })
  every?: WebsiteWhereInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereInput)
  @IsOptional()
  @Field(() => WebsiteWhereInput, {
    nullable: true,
  })
  some?: WebsiteWhereInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereInput)
  @IsOptional()
  @Field(() => WebsiteWhereInput, {
    nullable: true,
  })
  none?: WebsiteWhereInput;
}
export { WebsiteListRelationFilter as WebsiteListRelationFilter };