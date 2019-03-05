---
title: Rechnertechnik 13.02.2018
permalink: Semester_4/Rechnertechnik/2018-02-13_rechnertechnik_md
---
# Multiprozessoren und die von-Neumann Architektur
_aus der Vorlesung Rechnertechnik vom 13.02.2018_

---

In diesem Sinne sind nachrichtengekoppelte Multiprozessorsysteme vom Typ **N**o-**R**emote-**M**emory-**A**ccess (NORMA). Bezüglich der Übertragungszeit von Nachrichten unterscheidet man folgende Typen:

* **U**niform **C**ommunication **A**rchitecture (UCA): Zwischen allen Prozessoren können gleichlange Nachrichten in gleicher Zeit übertragen werden.
* **N**on **U**niform **C**ommunication **A**rchitecture (NUCA): Die Übertragungszeit für eine gleichlange Nachricht zwischen den Prozessoren ist je nach Sende- und Empfänger-Prozessor verschieden lang.

Das NUCA-Modell kommt bei nachrichtengekoppelten Multiprozessoren am häufigsten vor. Es wird hier eine Nachricht i.a. vom Sende- bis zum Ziel-Prozessor über mehrere Zwischen-Prozessoren geleitet (_multiple hops_).

Sind die Prozessoren gleichartig, so spricht man von **homogenen** Multiprozessorsystemen, ansonsten von **inhomogenen** Multiprozessoren.

## Die von-Neumann Architektur
Die von-Neumann Architektur ist eine Rechnerarchitektur mit minimalem Hardware-Aufwand; sie besteht aus folgenden Komponenten:

* Hauptspeicher (_Main Memory_) oder Arbeitsspeicher (_Working Memory_) zum Speichern von Daten und Befehlen.
* Befehlsprozessor (_Instruction Processor_) mit Steuerwerk (_Control Unit_ (CU)) zur Dekodierung (Interpretation, Entschlüsselung) der Maschinenbefehle und zur Erzeugung von Steuersignalen zur Steuerung anderer Komponenten
* Datenprozessor mit Rechenwerk (_Arithmetic Logical Unit_ (ALU)) für arithmetisch logische Operationen auf den Daten
* Ein-/Ausgabewerk (_I/O Processor_) zur Kommunikation und zum Datenaustausch mit der Peripherie (z.B. Arbeitsspeicher)
* einen Datenbus und einen Adressbus zum Datentransfer zwischen den Komponenten und den Arbeitsspeicher
* Steuerbus (_Control Bus_) zur Übertragung der Steuersignale zur Ausführung der Maschinenbefehle durch die Hardware

<img src="https://i.imgur.com/DjIqy7X.jpg" />

_Funktion einer von-Neumann Architektur_:
<img src="https://i.imgur.com/6uqnvzl.jpg" />

Der Datenprozessor hat die Aufgabe, Verarbeitungsdaten zu verarbeiten. Dazu besitzt er ein Rechenwerk und mindestens drei Register zur Aufnahme von Operanden. Register sind Speicher mit geringer Speicherkapazität, jedoch mit hoher Zugriffsgeschwindigkeit (kurze Zugriffszeiten).

Das **Memory Buffer Register** ist ein Puffer-Speicher, über den der Datenaustausch mit dem Speicher abgewickelt wird. **Akkumulator** und **Multiplikationsregister** dienen zur Aufnahme von Additions- und Multiplikationsoperanden (Verarbeitungsdaten) und der Ergebnisse nach der Verarbeitung. Im Steuerwerk des Befehlsprozessors werden die Maschinenbefehle dekodiert (entschlüsselt) und Steuersignale zur Ausführung der Befehle erzeugt. Dabei befindet sich der aktuell bearbeitete Maschinenbefehl im **Befehlsregister** (_Instruction Register_). Die Adresse, an welcher sich der nächste auszuführende Befehl im Speicher befindet, steht im **Program Counter Register**.

Ein typischer Befehlsablauf in einer von-Neumann Architektur sieht wie folgt aus:

1. In der **Fetch-Phase** wird der Inhalt des Program Counters auf den Adressbus übertragen. Anschließend wird der Speicher mit dieser Adresse angesprochen und der Befehl über den Datenbus in das Memory Buffer Register geladen und von dort in das Befehlsregister. Handelt es sich um einen Befehl mit Operanden, dann folgen dem Befehl noch Arbeitsspeicheradressen und die Operanden werden, auf die gleiche Weise wie vorher der Befehl, aus dem Speicher geholt und dann in den Datenprozessor geladen. Handelt es sich bei dem auszuführenden Befehl nicht um einen Sprungbefehl, so wird der Program Counter einfach inkrementiert. Bei Sprungbefehlen kann der Program Counter mit beliebigen Speicheradressen belegt werden, wodurch dann auch Programmschleifen möglich werden.
2. Nach der Fetch-Phase folgt die **Execution-Phase** mit der eigentlichen Befehlsausführung und ggf. Speicherung der Ergebnisse im Arbeitsspeicher.

Die Maschinenbefehle eines Programms werden also im Wechsel von Fetch- und Execution-Phasen ausgeführt, wobei diese Phasen bei realen CPUs deutlich komplizierter sind. So müssen häufig Adressberechnungen durchgeführt werden, oder es handelt sich um indirekte Adressen, die bei einem Befehl angegeben sind; d.h., dass der Inhalt einer Speicherzelle erst die Adresse der eigentlichen Operanden enthält.

Die Zeit für die Befehlsausführung ist bei den heutigen Prozessoren sehr gering im Vergleich zu Zugriffszeiten auf den Arbeitsspeicher. Daher spricht man bei der Kommunikation zwischen Prozessor und Arbeitsspeicher vom sogenannten "**von-Neumann Flaschenhals**". Zur Verbesserung dieser Situation werden heutzutage eine Reihe von architektonischen Maßnahmen ergriffen, wie z.B. schneller Cache-Speicher für wiederholte Speicherzugriffe.

_Wesentliche Eigenschaften des **Operationsprinzips** eines von-Neumann Rechners_:

* Alle Speicherworte können als Verarbeitungsdaten, Adressen oder Maschinenbefehle interpretiert werden. Die Verwendung und der Typ von Speicherworten (insbesondere der Typ von Daten) richtet sich nach dem jeweiligen Kontext des laufenden Programms oder dem Zustand, in dem sich der Rechner befindet.
* Programmdaten und Verarbeitungsdaten werden **gemeinsam** in einem Speicher abgelegt. Hierdurch können z.B. Übersetzerprogramme (Compiler, Assembler) andere Programme als Daten erzeugen und in den Arbeitsspeicher ablegen. Jedoch können Daten durch dieses Prinzip nur schwer vor unberechtigtem Zugriff durch Programme geschützt werden.
* Die Struktur eines zu bearbeitenden Problems wird bei der von-Neumann Architektur in einem Programm und nicht in der Hardware abgebildet, d.h. die Rechnerarchitektur ist im Wesentlichen unabhängig von der Art der zu bearbeitenden Aufgabe. Dies ist sicherlich eine herausragende Eigenschaft, die dafür gesorgt hat, dass dieser Rechnertyp von der Grundidee auch heute noch dominiert. Gleichartige Rechner, wie Personal Computer, können in hohen Stückzahlen günstig produziert werden und durch entsprechende Programme für die unterschiedlichsten Problembehandlungen universell eingesetzt werden.

## Übung
Als Beispiel für die Verarbeitung von Maschinenbefehlen betrachte man die Addition von einzugebenden Zahlen in einer Schleife, bis eine Null eingegeben wird und dann das Ergebnis der bis dahin addierten Zahlen ausgegeben wird.

Ein fiktiver Modellrechner soll u.a. über folgende mnemonischen Befehle verfügen:

|**Befehl**| **Beschreibung** |
|:-----:|:--------------------|
| `CLA` | (Clear Accu) Setzt den Akkumulatorinhalt auf 0 zurück. |
| `INA` | (Input Accu) Liest einen Wert in den Akkumulator ein. |
| `OUT` | (Output Accu) Gibt den Wert des Akkumulators aus. |
| `ADD (addr)` | addiert den Inhalt der Speicherzelle, die durch die Adresse `addr` angesprochen wird, zum Inhalt des Akkumulators und legt das Ergebnis im Akkumulator ab. |
| `STR (addr)` | (Store) speichert den Akkumulatorinhalt im Arbeitsspeicher an die Stelle `addr` |
| `SKP (addr)` | springt unbedingt zur Adresse `addr` |
| `SKZ (addr)` | springt zur Adresse `addr`, wenn Akkumulatorinhalt 0 ist, sonst wird der nächste Befehl ausgeführt. |
| `HLT` | (halt) Programmende |
