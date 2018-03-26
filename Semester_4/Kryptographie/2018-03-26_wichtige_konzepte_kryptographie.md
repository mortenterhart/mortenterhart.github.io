---
title: Kryptographische Begriffe und Konzepte
layout: default
permalink: Semester_4_md/Kryptographie/Wichtige_Konzepte

---

# Wichtige kryptographische Begriffe und Konzepte
_vom 26.03.2018_

---------

## Was ist Kryptologie?
Kryptologie ist eine Wissenschaft, die sich mit Methoden der Verschlüsselung und damit verwandten Verfahren befasst. Kryptologen sind ausgebildete High-End-Mathematiker.

&#x60;&#x60;&#x60;mermaid
graph TD;
  A[&quot;Kryptologie&quot;] &#x3D;&#x3D;&gt; B[&quot;Kryptographie&quot;]
  A &#x3D;&#x3D;&gt; C[&quot;Kryptoanalysis&quot;]
&#x60;&#x60;&#x60;

Kryptographie bezeichnet den Zweig der Kryptologie, der sich mit der Erstellung und dem Design kryptographischer Algorithmen befasst. In der Kryptoanalyse geht es um das nicht-autorisierte Brechen der Verschlüsselungen.

Der Kryptologie liegt ein einfaches **Kommunikationsmodell** zugrunde:

_Alice_ und _Bob_ wollen vertraulich kommunizieren, d.h. eine Nachricht, die Alice sendet, soll nur von Bob gelesen werden können (und umgekehrt).

Ein Angreifer heißt in diesem Modell _Eve_, deren Ziel es ist, die Kommunikation zu beeinflussen.

## Anforderungen an kryptographische Systeme
Bei der Kryptographie geht es um folgende wesentliche Punkte:
* **Geheimhaltung**
	* Ein kryptographisches System, das Geheimhaltung gewährleistet, verhindert die Entnahme von Informationen durch eine dritte, nicht autorisierte Partei während der Übertragung über einen unsicheren Kommunikationskanal.
	* _Oder_: Der Sender einer Nachricht kann sicher sein, dass nur der legitime Empfänger die Nachricht lesen kann.
* **Authentizität**
	* Ein kryptographisches System, das Authentizität gewährleistet, verhindert das nicht autorisierte Einschleusen einer Nachricht in einen unsicheren Kommunikationskanal.
	* _Oder_: Der Empfänger kann sicher sein, dass die Nachricht vom angegebenen Sender stammt.
* **Digitale Signatur**
	* Der Empfänger einer Nachricht kann eine neutrale Partei davon überzeugen, wer die Nachricht verfasst hat (ist schärfer als Authentifikation)
* **Integrität**
	* Ein kryptographisches System, das Integrität gewährleistet, verhindert die nicht autorisierte Manipulation des Inhalts einer Nachricht während der Übertragung über einen unsicheren Kommunikationskanal.
* **Verbindlichkeit**
	* Sender und Empfänger soll es nicht möglich sein, im Nachhinein zu behaupten, die Nachricht nicht gesendet / empfangen zu haben (ist so ähnlich wie ein Einschreiben).

## Weitere Begriffe
* **Identifikation**
	* bedeutet die eindeutige Zuordnung einer Identität zu einem Subjekt, z.B. Benutzername / E-Mail
* **Authentifizierung**
	* Verifikation der Gültigkeit einer Tatsache (Passwort / PIN)
* **Autorisierung**
	* Zuordnung von Rechten zu einem Subjekt

Vorstellbare Klausuraufgaben:
* Stellen Sie den Unterschied zwischen **Authentifizierung** und **Autorisierung** heraus.
	* _Antwort_: Bei der Authentifizierung geht es um den Beweis der eigenen Identität, in der Regel ein Anmeldeprozess. Bei der Autorisierung hingegen berechtigt man eine dritte Person, die Nachricht zu lesen. Übertagen auf die Kryptographie bedeutet dies, dass die Authentifizierung sicherstellt, dass nur der legitime Empfänger einer Nachricht diese auch lesen kann. Bei der Autorisierung berechtigt man eine dritte Partei, die Nachricht auch zu lesen.
* Was grenzt den **Datenschutz** von der **Datensicherheit** ab (siehe Begriffe im Folgenden definiert)?
	* _Antwort_: Der Datenschutz regelt, in welchem Maße personenbezogene Daten überhaupt erhoben werden dürfen, wer diese sehen und abrufen kann und wer damit &quot;handeln&quot; darf. Er zeigt Richtlinien für den Umgang mit diesen Daten auf. Die Datensicherheit beschäftigt sich mit der Privatisierung bzw. dem allgemeinen Schutz von Daten, die bereits erhoben wurden.

### Datenschutz und Datensicherheit

#### Datenschutz

&gt; &quot;Je nach Betrachtungsweise wird Datenschutz verstanden als Schutz vor missbräuchlicher [Datenverarbeitung](https://de.wikipedia.org/wiki/Datenverarbeitung &quot;Datenverarbeitung&quot;), Schutz des Rechts auf [informationelle Selbstbestimmung](https://de.wikipedia.org/wiki/Informationelle_Selbstbestimmung &quot;Informationelle Selbstbestimmung&quot;), Schutz des Persönlichkeitsrechts bei der Datenverarbeitung und auch Schutz der [Privatsphäre](https://de.wikipedia.org/wiki/Privatsph%C3%A4re &quot;Privatsphäre&quot;).&quot;
&gt; 
&gt; _Definition Datenschutz von Wikipedia_ ([Quelle](https://de.wikipedia.org/wiki/Datenschutz))

Der Datenschutz behandelt den Umgang mit personenbezogenen Daten. Hier geht es um die Frage, ob personenbezogene Daten überhaupt erhoben werden dürfen und / oder verarbeitet / anonymisiert werden.

#### Datensicherheit
&gt; Als **Informationssicherheit** bezeichnet man Eigenschaften von informationsverarbeitenden und -lagernden _(technischen oder nicht-technischen)_ Systemen, die die Schutzziele [Vertraulichkeit](https://de.wikipedia.org/wiki/Vertraulichkeit &quot;Vertraulichkeit&quot;), [Verfügbarkeit](https://de.wikipedia.org/wiki/Verf%C3%BCgbarkeit &quot;Verfügbarkeit&quot;) und [Integrität](https://de.wikipedia.org/wiki/Integrit%C3%A4t_(Informationssicherheit) &quot;Integrität (Informationssicherheit)&quot;) sicherstellen. Informationssicherheit dient dem Schutz vor [Gefahren](https://de.wikipedia.org/wiki/Gefahr &quot;Gefahr&quot;) bzw. [Bedrohungen](https://de.wikipedia.org/wiki/Bedrohung &quot;Bedrohung&quot;), der Vermeidung von wirtschaftlichen [Schäden](https://de.wikipedia.org/wiki/Schaden &quot;Schaden&quot;) und der Minimierung von [Risiken](https://de.wikipedia.org/wiki/Risiko &quot;Risiko&quot;).
&gt; 
&gt; _Definition Datensicherheit von Wikipedia_ ([Quelle](https://de.wikipedia.org/wiki/Informationssicherheit))

Datensicherheit versucht, die schon vorhandenen Daten (ob personenbezogen oder nicht) in einem informationstechnischen System zu schützen / unzugänglich zu machen.

## Klartext und Chiffrierung
**Definition**: Der **Klartext** (engl. _cleartext_ oder _plaintext_) ist die Nachricht, die durch ein geeignetes Verfahren in eine Form transformiert wird, dass eine Informationsentnahme durch eine dritte Partei nicht möglich ist.

Es gibt zwei grundlegende Verfahren, eine Nachricht vor Informationsentnahme zu schützen:
* Kryptographische Verfahren (&quot;unlesbar machen&quot;)
* Steganographie (Existenz der Nachricht verschleiern)

Das Verfahren, einen Klartext in eine Form zu transformieren, dass die Informationsentnahme nicht möglich ist, heißt **Verschlüsselung** oder **Chiffrierung**. Eine verschlüsselte Nachricht heißt **Chiffretext**.

Anmerkung: _Kodierung_ hat eine andere Bedeutung, nämlich Umwandlung in eine andere Form, damit sie geeignet verarbeitet werden kann.

Die Umkehrung heißt **Entschlüsselung** oder **Dechiffrierung**.

Üblicherweise verwenden heutige kryptographische Verfahren einen **Schlüssel** $K$, das ist ein besonderer Wert aus einem **Schlüsselraum**.

## Grundlegendes Szenario

&#x60;&#x60;&#x60;mermaid
graph LR;
    A[&quot;Klartext&quot;] &#x3D;&#x3D;&gt; B(&quot;Verschlüsselung&quot;)
    B &#x3D;&#x3D; Chiffretext &#x3D;&#x3D;&gt; C(&quot;Entschlüsselung&quot;)
    C &#x3D;&#x3D;&gt; D[&quot;Klartext&quot;]
    K --&gt; B
    K --&gt; C
&#x60;&#x60;&#x60;
Sender und Empfänger benötigen den gleichen Schlüssel $K$ zum Ver- / Entschlüsseln (daher **symmetrische Verschlüsselung**).

## Probleme bei symmetrischen Verfahren
Symmetrische Systeme haben (alle) drei grundsätzliche Probleme:
1. **Key Exchange Problem**
	* Der Schlüssel $K$ muss auf sicherem Weg von Alice zu Bob gelangen.
2. **Key Management Problem**
	* Bei $n$ Parteien: Wieviele $K$s werden benötigt?
	* $\rightarrow \frac{n (n - 1)}{2}$
	* Wird für jede Sitzung ein eigener Schlüssel verwendet oder für alle der Gleiche?
3. Mit symmetrischen Verfahren ist es nicht möglich, eine **digitale Signatur** zu realisieren. Es gibt kein eindeutiges Identifikationsmerkmal für den Sender einer Nachricht.

&#x60;&#x60;&#x60;mermaid
graph LR;
    A[&quot;Alice&quot;] &#x3D;&#x3D;&gt; B[&quot;Bob&quot;]
    C[&quot;3. Partei (&#x3D; Trust)&quot;]
&#x60;&#x60;&#x60;

## Asymmetrische Verfahren
**Public-Key Kryptographie** oder **asymmetrische Verschlüsselung**

Das funktioniert so:

**Szenario 1**: Alice will Bob eine vertrauliche Nachricht zukommen lassen (ohne Key-Exchange)

1. Bob erzeugt zwei Schlüssel $K_{\text{priv}}$ und $K_{\text{pub}}$
	* $K_{\overset{B}{\text{priv}}}$ ist nur Bob bekannt.
	* $K_{\overset{B}{\text{pub}}}$ kann veröffentlicht werden.
2. Alice besorgt sich $K_{\overset{B}{\text{pub}}}$ von Bob.
3. Alice verschlüsselt den Klartext mit Bobs $K_{\overset{B}{\text{pub}}}$.
	* $\rightarrow$ Chiffretext
4. Chiffretext geht an Bob (Bedingung: $D_{K_{\overset{B}{\text{pub}}}} (E_{K_{\overset{B}{\text{pub}}}} (M)) \ne M$
	* Die Entschlüsselung darf mit dem Public-Key von Bob nicht möglich sein.
5. Bob entschlüsselt das Chiffrat mit seinem $K_{\overset{B}{\text{priv}}}$, den nur er hat
	* $\rightarrow$ Klartext

$$
D_{K_{\overset{B}{\text{priv}}}} (E_{K_{\overset{B}{\text{pub}}}} (M)) &#x3D; M
$$

Nur mit dem privaten Schlüssel $K_{\overset{B}{\text{priv}}}$ von Bob darf die Entschlüsselung möglich sein.

Somit ist das Key-Exchange Problem **gelöst**, da **ein** Schlüssel ausreicht ($K_{\overset{B}{\text{pub}}}$), mit dem beliebig viele Parteien vertraulich mit Bob kommunizieren können.

In der Praxis: Public-Key-Verfahren sind etwa 1000x langsamer als symmetrische Verfahren.

Man verwendet daher sogenannte **Hybrid-Verfahren**.

Die Public-Key-Verfahren werden dabei genutzt, um zwischen Sender und Empfänger einen **Sitzungsschlüssel** auszutauschen; die Nutzdaten werden dann symmetrisch verschlüsselt, da Sender und Empfänger einen gemeinsamen Schlüssel haben.

**Szenario 2**: Digitale Signatur, Alice will Bob ein signiertes Dokument zukommen lassen.

1. Alice erzeugt ein Schlüsselpaar ($K_{\overset{A}{\text{priv}}}, K_{\overset{A}{\text{pub}}}$) (Sender).
2. Alice verschlüsselt den Klartext mit ihrem $K_{\overset{A}{\text{priv}}}$ (den nur Alice hat)
	* $\rightarrow$ Chiffrat
	* **Idee**: $D_{K_{\overset{A}{\text{pub}}}} (E_{K_{\overset{A}{\text{priv}}}} (M)) &#x3D; M$
3. Chiffrat geht an Bob.
4. Bob besorgt sich $K_{\overset{A}{\text{pub}}}$ und dechiffriert das erhaltene Chiffrat.
5. Entsteht Klartext, dann ist auch für eine neutrale dritte Partei gezeigt, dass Alice die Nachricht verfasst hat.

In der Praxis geht das etwas anders:

&#x60;&#x60;&#x60;mermaid
graph LR;
    A(&quot;Alice&quot;)
    B[&quot;Klartext&quot;] --&gt; C[&quot;Hash-Algorithmus&quot;]
    C --&gt; D[&quot;Hashwert (Message Digest)&quot;]
    D --&gt; E[&quot;Klartext (signiert)&quot;]
&#x60;&#x60;&#x60;

Der Hash-Algorithmus erzeugt eine Prüfziffer ($180$ Bit), die klartext-abhängig ist und sich ändert, falls die Nachricht manipuliert wurde. Damit garantiert der Hashwert die **Integrität**, d.h. das ist das Instrument, um zu prüfen, ob der Klartext während der Übertragung manipuliert wurde.

## Block- und Strom-Chiffren
Sowohl symmetrische als auch asymmetrische Verfahren können in Form von **Block-Chiffre** oder **Strom-Chiffre** eingesetzt werden.

Bei Block-Chiffren werden Bitblöcke, z.B. $64$-Bit, in einem Vorgang in einen $64$-Bit Chiffreblock verschlüsselt (Klartext $\rightarrow$ aufteilen in $n$ $64$-Bit Blöcke).

Bei Strom-Chiffren (bspw. bei WLAN) wird Zeichen für Zeichen verschlüsselt (bit- / byteweise).

## Grundsätzliche kryptographische Operationen
Es gibt in den meisten kryptographischen Systemen zwei grundsätzliche Operationen, wie Klartext in Chiffretext transformiert wird.

* **Substitution**
	* Bei einer Substitutionsoperation wird ein Klartextzeichen (oder ein Klartextblock) durch ein anderes Zeichen ersetzt. Die Position des Zeichens / Blocks bleibt erhalten.
* **Transposition** (auch _Permutation_ oder _Vertauschung_)
	* Transpositionsoperationen vertauschen die Reihenfolge der Zeichen, d.h. die Positionen der Klartextzeichen innerhalb des Textes. Die Form bleibt erhalten.

Moderne Verfahren benutzen eine Vielzahl von Substitutions- bzw. Transpositionsoperationen.

