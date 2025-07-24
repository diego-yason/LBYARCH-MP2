; CODE BY YASON, DIEGO DAVID PEREZ | S12B

section .data
normalFactor dq 255.0

section .text
bits 64
default rel

global imgCvtGrayIntToDouble

imgCvtGrayIntToDouble:
	; inputs:
	;		ECX - size of array
	;		RDX - point to in array
	;		R8 - point to out array

	; no need to do anything for ECX.
	mov RBX, RDX	; more appropriate location
	mov RDX, R8		; more appropriate location

convert:
	CVTSI2SD XMM0, [RBX] ; convert int to double
	MOVSD XMM1, [normalFactor]
	DIVSD XMM0, XMM1

	MOVSD [RDX], XMM0	; store result

	add RBX, 8
	add RDX, 8
	LOOP convert

	ret
