import { IResolverValidationOptions } from '@graphql-tools/utils';
import { Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Config, GraphQLExecutor } from 'apollo-server-core';
import { GraphQLSchema } from 'graphql';
import { DefinitionsGeneratorOptions } from '../graphql-ast.explorer';
import { BuildSchemaOptions } from './build-schema-options.interface';
export interface ServerRegistration {
    path?: string;
    cors?: any | boolean;
    bodyParserConfig?: any | boolean;
    onHealthCheck?: (req: any) => Promise<any>;
    disableHealthCheck?: boolean;
}
export declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type Enhancer = 'guards' | 'interceptors' | 'filters';
export interface GqlModuleOptions extends Omit<Config, 'typeDefs'>, Partial<Pick<ServerRegistration, 'onHealthCheck' | 'disableHealthCheck' | 'path' | 'cors' | 'bodyParserConfig'>> {
    typeDefs?: string | string[];
    typePaths?: string[];
    include?: Function[];
    executorFactory?: (schema: GraphQLSchema) => GraphQLExecutor | Promise<GraphQLExecutor>;
    installSubscriptionHandlers?: boolean;
    resolverValidationOptions?: IResolverValidationOptions;
    directiveResolvers?: any;
    schemaDirectives?: Record<string, any>;
    transformSchema?: (schema: GraphQLSchema) => GraphQLSchema | Promise<GraphQLSchema>;
    definitions?: {
        path?: string;
        outputAs?: 'class' | 'interface';
    } & DefinitionsGeneratorOptions;
    autoSchemaFile?: string | boolean;
    buildSchemaOptions?: BuildSchemaOptions;
    useGlobalPrefix?: boolean;
    fieldResolverEnhancers?: Enhancer[];
    sortSchema?: boolean;
    transformAutoSchemaFile?: boolean;
}
export interface GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions;
}
export interface GqlModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<GqlOptionsFactory>;
    useClass?: Type<GqlOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<GqlModuleOptions> | GqlModuleOptions;
    inject?: any[];
}
