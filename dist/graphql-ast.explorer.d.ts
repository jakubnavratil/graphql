import { DocumentNode, EnumTypeDefinitionNode, EnumTypeExtensionNode, FieldDefinitionNode, InputObjectTypeDefinitionNode, InputObjectTypeExtensionNode, InputValueDefinitionNode, InterfaceTypeDefinitionNode, InterfaceTypeExtensionNode, NamedTypeNode, ObjectTypeDefinitionNode, ObjectTypeExtensionNode, OperationTypeDefinitionNode, ScalarTypeDefinitionNode, ScalarTypeExtensionNode, TypeNode, TypeSystemDefinitionNode, TypeSystemExtensionNode, UnionTypeDefinitionNode, UnionTypeExtensionNode } from 'graphql';
import { ClassDeclaration, ClassDeclarationStructure, InterfaceDeclaration, InterfaceDeclarationStructure, ParameterDeclarationStructure, SourceFile } from 'ts-morph';
export interface DefinitionsGeneratorOptions {
    emitTypenameField?: boolean;
    skipResolverArgs?: boolean;
    defaultScalarType?: string;
    customScalarTypeMapping?: Record<string, string | {
        name: string;
    }>;
    additionalHeader?: string;
}
export declare class GraphQLAstExplorer {
    private readonly root;
    explore(documentNode: DocumentNode, outputPath: string, mode: 'class' | 'interface', options?: DefinitionsGeneratorOptions): Promise<SourceFile>;
    lookupDefinition(item: Readonly<TypeSystemDefinitionNode | TypeSystemExtensionNode>, tsFile: SourceFile, mode: 'class' | 'interface', options: DefinitionsGeneratorOptions): void;
    lookupRootSchemaDefinition(operationTypes: ReadonlyArray<OperationTypeDefinitionNode>, tsFile: SourceFile, mode: 'class' | 'interface'): void;
    addObjectTypeDefinition(item: ObjectTypeDefinitionNode | ObjectTypeExtensionNode | InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode | InterfaceTypeDefinitionNode | InterfaceTypeExtensionNode, tsFile: SourceFile, mode: 'class' | 'interface', options: DefinitionsGeneratorOptions): void;
    lookupFieldDefiniton(item: FieldDefinitionNode | InputValueDefinitionNode, parentRef: InterfaceDeclaration | ClassDeclaration, mode: 'class' | 'interface', options: DefinitionsGeneratorOptions): void;
    lookupField(item: FieldDefinitionNode | InputValueDefinitionNode, parentRef: InterfaceDeclaration | ClassDeclaration, mode: 'class' | 'interface', options: DefinitionsGeneratorOptions): void;
    getFieldTypeDefinition(type: TypeNode): {
        name: string;
        required: boolean;
    };
    getNestedType(type: TypeNode): {
        type: TypeNode;
        required: boolean;
    };
    getType(typeName: string): string;
    getDefaultTypes(): {
        [type: string]: string;
    };
    getFunctionParameters(inputs: ReadonlyArray<InputValueDefinitionNode>): ParameterDeclarationStructure[];
    addScalarDefinition(item: ScalarTypeDefinitionNode | ScalarTypeExtensionNode, tsFile: SourceFile, options: DefinitionsGeneratorOptions): void;
    addExtendInterfaces(interfaces: NamedTypeNode[], parentRef: InterfaceDeclaration): void;
    addImplementsInterfaces(interfaces: NamedTypeNode[], parentRef: ClassDeclaration): void;
    addEnumDefinition(item: EnumTypeDefinitionNode | EnumTypeExtensionNode, tsFile: SourceFile): void;
    addUnionDefinition(item: UnionTypeDefinitionNode | UnionTypeExtensionNode, tsFile: SourceFile): void;
    addSymbolIfRoot(name: string): string;
    isRoot(name: string): boolean;
    addClassOrInterface(tsFile: SourceFile, mode: 'class' | 'interface', options: InterfaceDeclarationStructure | ClassDeclarationStructure): InterfaceDeclaration | ClassDeclaration;
    getClassOrInterface(tsFile: SourceFile, mode: 'class' | 'interface', name: string): InterfaceDeclaration | ClassDeclaration;
}
