---
title: Rechnertechnik 23.01.2018
layout: default
permalink: Semester_4/Rechnertechnik/2018-01-23_rechnertechnik_md
---
# Einführung Rechnerarchitektur
## Rechnerarchitektur, Begriffsbildung

Die Rechnerarchitektur wird durch die Aufbaustruktur der Hardware und das Operationsprinzip bestimmt. Hierbei legt das funktionelle Verhalten bei der Darstellung, der Speicherung und bei der Transformation von Informationen fest. Dies umfasst die Festlegung der Bedeutung von Kontrollstrukturen zur Programmausführung in der Hardware. Ein und dasselbe Operationsprinzip kann in verschiedenen Hardware-Strukturen realisiert werden. Beim Entwurf einer Rechnerarchitektur sollen u. a. folgende Anforderungen möglichst gut erfüllt werden:

- Leistung
- Ausfalltoleranz
- Erweiterbarkeit
- Benutzerfreundlichkeit

Man unterscheidet grundsätzlich zwischen Universalrechnern und Spezialrechnern. Während bei der Konstruktion von Spezialrechnern bestimmte Ziele, z.B. die Leistung, besonders wichtig sind, werden Universalrechner so konstruiert, dass die oben genannten Anforderungen möglichst alle erfüllt sind und die Kosten minimiert werden.

Die Leistung ist sicher ein wichtiges Ziel bei einer Rechnerarchitektur. Hierbei kann eine Forderung nach einer absoluten Leistung für Echtzeit-Aufgaben oder nach einer mittleren Leistung im Mehrbenutzerbetrieb eines Servers gestellt werden.

Bei Super-Computern, die zur Lösung rechenintensiven Simulationsaufgaben eingesetzt werden, kannd ie Beachtung der Kosteneffektivität, d.h. die Leistung in Bezug auf die Kosten, oft in den Hintergrund gestellt werden. Eine Rechnerarchitektur sollte so konzipiert sein, dass sowohl die Rechenleistung erhöht, als auch neue Funktionen in einem Rechner integriert werden können (z.B. Steckkarten in PCs). Diese Forderung nach Erweiterbarkeit nennt man auch Skalierbarkeit (scalability).

Bei Anfallstoleranz ist das Ziel, die Betriebsfähigkeit eines Rechners bei Aufall einzelner Komponent möglichst zu erhalten. Dabei kann die Leistung reduziert werden. Jedoch sollten die Rechenergebnisse bei Ausfall erhalten bleiben und besser noch auf einem nicht flüchtigen Speicher gerettet werden.

Unter Ergonomie und Benutzerfreundlichkeit wird vor allem die Gestaltung der Benutzerschnittstellen durch Peripheriegeräte, z.B. Monitore, Tastaturen, Mäuse und auch Sprach-Ein- und Ausgabe-Systeme. Natürlich lassen sich mehrere Ziele gleichzeitig verfolgen, da sie voneinander stark entkoppelt sind. In welchem Maß einzelne Ziele verfolgt werden, wird durch eine entsprechende Kosten-Nutzen-Analyse bestimmt.

Die Komponenten einer Rechnerarchitektur sind Hardware-Betriebsmittel, wie Prozessoren, Speicher und Kommunikationshardware (Busse). Wie in der Bauarchitektur gibt es auch in der Rechnerarchitektur Kommunikationsprinzipien, nach denen die Hardware-Betriebsmittel zu einer Rechnerarchitektur zusammengefügt werden.

## Teilgebiete der Informatik: Einordnung der Rechnerarchitektur

Informatik (computer science) ist die Wissenschaft von der automatisierten Informationsverarbeitung. Die praktischen und theoretischen Aufgabengebiete lassen sich wie folgt beschreiben:

- Organisatorische, algorithmische und programmtechnische Realisierung von informationsverarbeitenden Prozessen
- Entwurf, (Realisierung), Inbetriebnahme und effektiverer Betrieb von Systemen zur Informationsverarbeitung

Der Entwurf von Rechenrn kann hierbei eindeutig der Rechnerarchitektur zugeordnet werden. Die Informatik hat zwei Hauptgebiete, die Allgemeine Informatik (auch Kerninformatik) und die Angewandte Informatik. Die zwei Hauptgebiete unterteilen sich jeweils in weitere Teilgebiete und diese wiederum in Themenbereiche

In diesem Umfeld gehört die Rechnerarchitektur zu den Grundlagenfächern der Technischen Informatik. Dabei nutzt die Rechnerarchitektur die Erkenntnisse und die entwickelten Komponenten (Hardware-Betriebsmittel) aus der Schaltungstechnik. Desweiteren ist für den Betrieb eines Rechners ein sogenanntes Betriebssystem erforderlich, welches an die Rechnerarchitektur angepasst ist. Architekturdetails für die den Benutzer unwichtig sind, bleiben dabei für den Benutzer transparent.

| Hauptgebiet | Teilgebiet | Themenbereiche |
|-------------|------------|----------------|
|Allgemeine Informatik |Theoretische Informatik| Theorie der Berechenbarkeit, Theorie der formalen Sprachen, Automatentheorie|
||Praktische Informatik|Betriebssysteme, Compilerbau, Graphische Datenverarbeitung, Softwaretechnik|
||Technische Informatik|Rechnerarchitektur, Prozessdatumverarbeitung, Schaltungstechnik|
|Angewandte Informatik|Wirtschaftsinformatik|Informations- und Planungssysteme|
||Medizin-Informatik|Dokumentation und Diagnose|
||Verwaltungs-Informatik|Öffentliche Verwaltung|
||Produktions-Informatik|Arbeitsplanung und Arbeitssteuerung, Qualitätssicherung|
||Linguistische Informatik|Verarbeitung natürlicher Sprachen|
||Unterrichts-Informatik|individuelles Lernen, Lernplattformen|
||Kultur-Informatik|Unterhaltung, Kunst|
||Gesellschafts-Informatik|Datenschutz, Computerkriminalität|

## Historische Entwicklung von Rechnerarchitekturen

Nachfolgende Übersicht zeigt wie weit die Grundlagen auf deren heutige Rechner basieren zurückreichen und wie rasant die Entwicklung seit der Erfindung des ersten freiprogrammierbaren Rechners durch Konrad Zuse bis heute verlief.

| Ursprünge | |
|-----------|-|
| ca. 5000 v. Chr. | Zahlensysteme zum systematischen Rechnen |
| (500-300) v. Chr. | Entwicklung der Logik (Platon, Aristoteles) |
| um 0 | Nutzung erster Automaten (z.B. Türöffner) |
| 110 | Dezimales Zahlensystem |
| 820 | Anfänge von Algebra und Algorithmik (Al Chwarizmi) |
| 1623 | Zahnradgetriebene Rechenmaschine (Schickard) |
| 1679 | Arbeit über das Rechnen mit Dualzahlen (Leibniz) |
| 1800 | Konzept einer digitalen programmgesteuerten Rechenmaschine (Babbage) |
| 1889 | Elektromagnetische Sortier- und Zählmaschine mit Lochkarten (Hollerith) |

| Moderne Informatik| |
|-------------------|-|
| 1941 | programmierbaren Rechner mit elektromechanischen Komponenten (Relais) mit Binärsystem und Gleitpunktarithmetik (Zuse) |
| um 1949 | Berechenbarkeitsüberlegung (Turing) |
| 1946 - 1954 | Rechner der 1. Generation, Relais und Röhren |
| ab 1953 | höhere Programmiersprache FORTRAN |
| 1955 - 1962 | Rechner der 2. Generation (Transitoren) |
| ab 1959 | Entwicklng erster Betriebssysteme, Stapelverarbeitung, höhere Programmiersprachen COBOL, LISP
| 1962 - 1976 | Rechner der 3. Generation mit integrierten Schaltungen
| 1967 | Small Scale INtegration (SSI) ab 50 Transistoren pro Chip
| 1971 | Medium Scale Integration (MSI) 500 Transistoren pro Chip
| bis 1976 | Large Scale Integration (LSI) mehrere Tausend Transistoren pro Chip
| ab 1970 | Super-Computer-Architekturen (CDC-Star-100, ILLIAC IV, CRAY-1)
| 1965 - 1975 | Multiuser/Multiprogramming Betriebssysteme
| | Datenbanken
| | Software-Engineering
| | Höhere Programmiersprache C (1968, Richie)
| | Pascal (1971, Wirth)
| | Prolog (1972, Colmenhauer)
| 1976 - 1982 | Rechner der 4. Generation, Very Large Scale Integration (VLSI) Hundertausend Transistoren pro Chip
| | Rechnernetze und verteilte Informationsverarbeitung
| | Personalcomputer (1980)
| | RISC-Konzepte (1981)
| ab 1982 bis heute|  Rechner 5. Generation
| | Ultra Large Scale Integration (ULSI), mehrere hundert Millionen Transistoren pro Chip
| | Client/Server Anwendungen
| | PCs Tablets Smartphones
| | Internet für alle / Multimedia

## Klassifikation von Rechnerarchitekturen

Nach FLYNN kann eine allgemeine Klassifikation von Rechnerarchitekturen bezogen auf die Befehlsströme und die Datenströme vorgenommen werdne. Diese Klassifikation unterscheidet Rechner mit einem oder mehreren (multiplen) Befehlsströmen oder einen oder mehreren (multiplen) Datenströmen.

| | Ein Befehl zu einer Zeit bearbeiten | Mehrer Befehle zu einer Zeit bearbeiten
|-|-|-|
| Ein Datenwert zu einer Zeit bearbeiten | Single Instruction Stream over Single Data Stream (SISD) | Multiple Instruction Stream over Single Data Stream (MISD)
| Mehrere Datenwerte zu einer Zeit bearbeiten | Single Instruction Stream over Multiple Data Stream (SIMD) | Multiple Instruction Stream over Multiple Data Stream (MIMD)

- Die Klasse SISD-Rechner entspricht der klassischen Einprozessor von Neumann-Architekturen.
- Die Klasse MISD ist leer, da es kein Sinn macht mehrere Befehle auf einem Datenwert **zu einer Zeit** (gleichezeitig) auszuführen.
- Die Klasse SIMD umfasst die Feld- und Vektorrechner. Feldrechner bestehen aus einem Feld von regelmäßig miteinander verbunden Verarbeitungseinheiten, die unter Kontrolle durch eine zentrale Steuereinheit dieselbe MaschinenOperation auf verschiedenen Daten ausführen Feldrechner können sehr viele Verarbeitungseinheiten enthalten. Die einzelnen Verarbeitungseinheiten besitzen lokale Speicher und sind entweder vollständige Prozessoren, können aber auch nur einzelne Bit verarbeitende Schaltungen sein. Ein gesamtes über die Verarbeitungseinheiten verteiltes Datenfeld wird in eine der zulässigen Kommunikationsrichtungen verschoben. Die Verbindungsstruktur ist ein Gitter mit vier oder acht Verbindungen zu jeweils den nächsten Nachbarnoten. Die Kommunikationsrichtungen heißen em anch Nord, Süd, Ost und West bei vier Kommunikationsrichtungen und zusätzlich Nord-Ost, Süd-West, Süd-Ost, Nord-West bei acht Kommunikationsrichtungen. Die Anwendung von Feldrechnern erfolgt bei speziellen Problemen, z.B. bei Signal- und Bildverarbeitung, allgemein dann wenn die Daten in Matrixform vorliegen. Beispiel für Feldrechner sind der historische ILLIAC IV mit 64 Prozessoren, die heutigen Rechner Connection Machines Typ CM-1, CM-2, CM-200, der DAP (distributed array processor) der englsichen Firma ICL und die Rechner MP-1, MP-2 der Firma MasPar.

  Bei einem Vektorrechner hat das Rechnerwerk mehrere arithmetische Funktionseinheiten, die nach dem Fließbandprinzip (Pipelining) mehrere Gleitpunktzahlen bearbeiten. Dabei wird mit speziellen Maschinenbefehlen, dem sog. Vektorbefehlen i.d.R. ein Paar von Vektoren, d.h. z.B. 128 oder 256 Gleitpunktzahlen

  Das Grundprinzip des Pipelining ist, Operationen in Teiloperationen zu zerlegen, die dann gleichzeitig von mehreren Funktonseinheiten ausgeführt werden. Die Addition von zwei Gleitkommazahlen besteht aaus mehreren Schritten z.B.
  1. Zyklus - Gleitpunktzahlen in Register laden
  2. Zyklus - Exponenten der Zahlen vergleicehn und eine Mantisse so shiften, dass die Exponenten gleich werden
  3. Zyklus - Mantisse addieren
  4. Zyklus - Ergebnis normalisieren, d.h. Mantisse falls notwendig mit Änderung des Exponenten in die Form 0.xxx bringend
