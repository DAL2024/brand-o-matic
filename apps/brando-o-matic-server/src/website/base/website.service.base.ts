/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Website as PrismaWebsite } from "@prisma/client";
import { WebsiteSubmitInput } from "../WebsiteSubmitInput";
import { AnalysisResultOutput } from "../../analysisResult/AnalysisResultOutput";

export class WebsiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WebsiteCountArgs, "select">): Promise<number> {
    return this.prisma.website.count(args);
  }

  async websites<T extends Prisma.WebsiteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteFindManyArgs>
  ): Promise<PrismaWebsite[]> {
    return this.prisma.website.findMany<Prisma.WebsiteFindManyArgs>(args);
  }
  async website<T extends Prisma.WebsiteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteFindUniqueArgs>
  ): Promise<PrismaWebsite | null> {
    return this.prisma.website.findUnique(args);
  }
  async createWebsite<T extends Prisma.WebsiteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteCreateArgs>
  ): Promise<PrismaWebsite> {
    return this.prisma.website.create<T>(args);
  }
  async updateWebsite<T extends Prisma.WebsiteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteUpdateArgs>
  ): Promise<PrismaWebsite> {
    return this.prisma.website.update<T>(args);
  }
  async deleteWebsite<T extends Prisma.WebsiteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteDeleteArgs>
  ): Promise<PrismaWebsite> {
    return this.prisma.website.delete(args);
  }
  async AnalyzeWebsite(args: WebsiteSubmitInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitWebsite(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitWebsiteForAnalysis(
    args: WebsiteSubmitInput
  ): Promise<AnalysisResultOutput> {
    throw new Error("Not implemented");
  }
}
