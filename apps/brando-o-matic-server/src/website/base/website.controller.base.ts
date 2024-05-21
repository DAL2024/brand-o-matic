/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WebsiteService } from "../website.service";
import { WebsiteCreateInput } from "./WebsiteCreateInput";
import { Website } from "./Website";
import { WebsiteFindManyArgs } from "./WebsiteFindManyArgs";
import { WebsiteWhereUniqueInput } from "./WebsiteWhereUniqueInput";
import { WebsiteUpdateInput } from "./WebsiteUpdateInput";
import { WebsiteSubmitInput } from "../WebsiteSubmitInput";
import { AnalysisResultOutput } from "../../analysisResult/AnalysisResultOutput";

export class WebsiteControllerBase {
  constructor(protected readonly service: WebsiteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Website })
  async createWebsite(
    @common.Body() data: WebsiteCreateInput
  ): Promise<Website> {
    return await this.service.createWebsite({
      data: data,
      select: {
        brandingAnalysis: true,
        colorPsychology: true,
        createdAt: true,
        id: true,
        messagingAnalysis: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Website] })
  @ApiNestedQuery(WebsiteFindManyArgs)
  async websites(@common.Req() request: Request): Promise<Website[]> {
    const args = plainToClass(WebsiteFindManyArgs, request.query);
    return this.service.websites({
      ...args,
      select: {
        brandingAnalysis: true,
        colorPsychology: true,
        createdAt: true,
        id: true,
        messagingAnalysis: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Website })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async website(
    @common.Param() params: WebsiteWhereUniqueInput
  ): Promise<Website | null> {
    const result = await this.service.website({
      where: params,
      select: {
        brandingAnalysis: true,
        colorPsychology: true,
        createdAt: true,
        id: true,
        messagingAnalysis: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Website })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWebsite(
    @common.Param() params: WebsiteWhereUniqueInput,
    @common.Body() data: WebsiteUpdateInput
  ): Promise<Website | null> {
    try {
      return await this.service.updateWebsite({
        where: params,
        data: data,
        select: {
          brandingAnalysis: true,
          colorPsychology: true,
          createdAt: true,
          id: true,
          messagingAnalysis: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Website })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWebsite(
    @common.Param() params: WebsiteWhereUniqueInput
  ): Promise<Website | null> {
    try {
      return await this.service.deleteWebsite({
        where: params,
        select: {
          brandingAnalysis: true,
          colorPsychology: true,
          createdAt: true,
          id: true,
          messagingAnalysis: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/submit-website")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SubmitWebsite(
    @common.Body()
    body: WebsiteSubmitInput
  ): Promise<string> {
    return this.service.SubmitWebsite(body);
  }

  @common.Post("/submit-website")
  @swagger.ApiOkResponse({
    type: AnalysisResultOutput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SubmitWebsiteForAnalysis(
    @common.Body()
    body: WebsiteSubmitInput
  ): Promise<AnalysisResultOutput> {
    return this.service.SubmitWebsiteForAnalysis(body);
  }
}
