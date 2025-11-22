export declare const ID = 'zokugun.explicit-folding';

export type Hub = {
	registerFoldingRules(language: string, rules: Config[]): void;
	unregisterFoldingRules(language: string): void;
};

export type Variables = {
	variables: Record<string, string>;
};

type BeginProperty = { begin: string; beginRegex: undefined } | { begin: undefined; beginRegex: string };
type ContinuationProperty = { continuation: string; continuationRegex: undefined } | { continuation: undefined; continuationRegex: string };
type EndProperty = { end: string; endRegex: undefined } | { end: undefined; endRegex: string };
type FoldLastLineProperty = { foldLastLine?: boolean | string; foldLastLineRegex: undefined } | { foldLastLine: undefined; foldLastLineRegex: string };
type MiddleProperty = { middle: string; middleRegex: undefined } | { middle: undefined; middleRegex: string };
type SeparatorProperty = { separator: string; separatorRegex: undefined } | { separator: undefined; separatorRegex: string };
type WhileProperty = { while: string; whileRegex: undefined } | { while: undefined; whileRegex: string };

export type Rule = {
	kind?: 'comment' | 'region';
	name?: string;
	include?: string | string[];
	bypassProtection?: boolean;
	autoFold?: boolean;
	variables: undefined;
};

export type BeginContinuationRule = Rule & {
	foldLastLine?: boolean;
	foldBeforeFirstLine?: boolean;
	foldEOF?: boolean;
}
& BeginProperty
& ContinuationProperty;

export type BeginEndRule = Rule & {
	consumeEnd?: boolean;
	foldLastLine?: boolean;
	foldBeforeFirstLine?: boolean;
	foldEOF?: boolean;
	nested?: boolean | Rules[];
	strict?: boolean | string;
}
& BeginProperty
& MiddleProperty
& EndProperty;

export type BeginWhileRule = Rule & {
	foldBeforeFirstLine?: boolean;
	foldEOF?: boolean;
}
& BeginProperty
& WhileProperty
& FoldLastLineProperty;

export type IndentationRule = Rule & {
	indentation: true;
	begin?: string;
	beginRegex?: string;
	offSide?: boolean;
	end: undefined;
	endRegex: undefined;
	nested?: Rules[];
};

export type SeparatorRule = Rule & {
	foldBOF?: boolean;
	foldEOF?: boolean;
	strict?: boolean | string;
	descendants?: Rules[];
	nested?: boolean | Rules[];
}
& SeparatorProperty;

export type WhileRule = Rule & {
	foldLastLine?: boolean;
	foldBeforeFirstLine?: boolean;
	foldEOF?: boolean;
}
& WhileProperty;

export type UnkownRule = Rule & {
	begin?: string;
	middle?: string;
	end?: string;
	beginRegex?: string;
	middleRegex?: string;
	endRegex?: string;
	continuation?: string;
	continuationRegex?: string;
	separator?: string;
	separatorRegex?: string;
	while?: string;
	whileRegex?: string;
	indentation?: boolean;
};

export type Rules = BeginContinuationRule | BeginEndRule | BeginWhileRule | IndentationRule | SeparatorRule | WhileRule;

export type Config = Rules | Variables;
