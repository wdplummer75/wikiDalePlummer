:: knitr.bat - Basic windows batch file to execute a knitr R script
::    and process the resulting tex file into a PDF file using MikTex.
::
:: usage:
::    cd <directory-containing-Rnw-file>
::    knitr.bat <your R script>
::
:: Note: do not use the ".Rnw" extension on the command above.
::
:: Check for the presence of the Rnw file.  If present, process it with R
:: and pass the resulting tex file to pdflatex (pdflatex is part of MikTex).
:: If Rnw file is not present output an error message.
::
if exist %1.Rnw (
	Rscript -e "knitr::knit('%1.Rnw')"
	pdflatex %1.tex
) else (
	echo %1.Rnw not found
)
